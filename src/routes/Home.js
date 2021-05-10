import React, {useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { authService, dbService, firebaseInstance, storageService } from "myBase";
import Nweet from "components/Nweet";

// Tweet을 날릴 수 있는 Home route -> Firebase DB와 연동
// Firebase의 DB는 NoSQL임 (간단, 강력, Vㅔ리 플렉서블)

// 5/4 Auth.js에서 로그인할 때 기록한 유저 정보를 props로 받아왔다.
const Home= ({ userObj }) => {
    //console.log(userObj);
    // onSubmit에서 전송할 nweet state
    const [nweet, setNweet] = useState("");
    // firebase DB에서 가져온 nweet state
    const [nweets, setNweets] = useState([]);
    // 파일첨부 state
    const [attachment, setAttachment] = useState("");

    // 컴포넌트가 Mount될 때 실행될때
    // this method is getting old version nweet. 새로고침 해야만 갱신됨
    /*
    const getNweets = async() =>{
        // 이렇게 바로 가져오면 object 형 querySnapshot을 return 함.
        // 우리는 이 데이터를 용도에 맞게 조작해야함
        const dbNweets = await dbService.collection("nweets").get();
        dbNweets.forEach((document) => { 
            // document.data()로 가져온 nweets data를 nweets state에 저장 (setState)
            // 뭐든 받은 이전 데이터는 document.data()에 받은 데이터가 된다.
            const nweetObject = {
                // spread data
                ...document.data(),
                id: document.id,              
            }
            setNweets((prev) => [nweetObject, ...prev]);
         });
    }*/

    // 5/4 getNweets 방식을 snapshot에서 가져오는 방식으로 변경한다.
    useEffect(()=>{  
        //onSnapshot: DB의 변화를 실시간으로 알려준다. - 공식문서에 나옴
        //onSnapshot에 아래와 같이 orderBy 옵션을 줄 수 있다.
        dbService.collection("nweets").orderBy("createdAt", "desc").onSnapshot((snapshot) => {
            const nweetArray = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
              }));
            setNweets(nweetArray);
        });
    }, []);

    const onSubmit = async (event) => {
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

      const onClearAttachment = () => setAttachment(null);
    return(
    <div>
        <form onSubmit={ onSubmit }>
            <input value={nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
            <input type="file" accept="image/*" onChange={onFileChange}/>
            <input type="submit" value="Nweet"/>
            { attachment && 
            (
                <div> 
                    <img src={attachment} width="50px" height="50px" /> 
                    <button onClick={onClearAttachment}>Clear</button>
                </div> )
            }
        </form>
        <div>
            {nweets.map((nweet) => (
                <Nweet 
                    key={nweet.id} 
                    nweetObj={nweet} 
                    isOwner={nweet.creatorId === userObj.uid} 
                />
            ))}
        </div>
    </div>
        );
    };

export default Home;