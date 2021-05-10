import {React, useState } from "react";
import { storageService, dbService } from "myBase";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

/*
    Title: NweetFactory.js
    Refactoying at: 2021-05-10
    Description: creating Nweet component 
*/

const NweetFactory = ({ userObj }) => {
    // onSubmit에서 전송할 nweet state
    const [nweet, setNweet] = useState("");
    // 파일첨부 state
    const [attachment, setAttachment] = useState("");    

    const onSubmit = async (event) => {
        if (nweet === ""){
            return;
        }
        event.preventDefault();

        let attachmentURL = "";
        if(attachment !== "")
        {
            // 5/7 npm install uuid --> uuid는 어떠한 식별자를 랜덤으로 생성해줌
            const attachmentRef = storageService
                .ref()
                .child(`${userObj.uid}/${uuidv4()}`)
            const response = await attachmentRef.putString(attachment, "data_url");
            attachmentURL = await response.ref.getDownloadURL();
        }
        const nweetObj = {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentURL
        };
        dbService.collection("nweets").add(nweetObj);
         // 데이터 보내고 나면 Nweet value, attachmentURL은 빈 문자열로.
         setNweet("");
         setAttachment("");
    }

    const onChange = (event) =>{
        const {
             target:{value}, 
            } = event;
            setNweet(value);
    };
    //console.log(nweets);
    const onFileChange = (event) => {
        const {
          target: { files },
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
              } = finishedEvent;
              setAttachment(result);
        };
        reader.readAsDataURL(theFile);
      };

    const onClearAttachment = () => setAttachment("");

    return (
        <form onSubmit={ onSubmit } className="factoryForm">
        <div className="factoryInput__container">
            <input value={nweet} onChange={onChange} type="text" placeholder="What's on your mind?" className="factoryInput__input" maxLength={120} />
            <input type="submit" value="&rarr;" className="factoryInput__arrow" />
        </div>
        <label for="attach-file" className="factoryInput__label">
            <span>Add photos</span>
            <FontAwesomeIcon icon={faPlus} />
        </label>
        <input id="attach-file" type="file" accept="image/*" onChange={onFileChange}
               style={{
                   opacity: 0,
               }}/>
        { attachment && 
        (
            <div className="factoryForm__clear" onClick={onClearAttachment}> 
                <span>Remove</span> 
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </div> )
        }
    </form>
    );
}
export default NweetFactory;