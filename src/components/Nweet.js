/* 
  Component name: Nweet.js 
  Description: Nweet message update and delete component (if your own nweet) 
  Author: Hyun-wook Hong
*/
import { dbService, storageService } from "myBase";
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);

    const onDeleteClick = async () => {
        const OK = window.confirm("Are you sure you want to delete this nweet?");
        //console.log(OK)
        if(OK){
            // delete nweet
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
            await storageService.refFromURL(nweetObj.attachmentURL).delete();
        }
    }
    const toggleEditing = () => setEditing((prev) => !prev);
    const onSubmit = async (event) => { 
        event.preventDefault(); 
        //console.log(nweetObj, newNweet);
        await dbService.doc(`nweets/${nweetObj.id}`).update({
            text: newNweet,
        });
        setEditing(false);
    } 
    const onChange = (event) =>{
        const { target: {value},
                } = event;
        setNewNweet(value);
    }
    return (
    <div className="nweet">
        { editing ? ( 
            <>
            <form onSubmit={onSubmit} className="container nweetEdit" >
                <input type="text" placeholder="Edit your nweet" value={newNweet} required autoFocus onChange={onChange} className="formInput"/>
                <input type="submit" value="Update Nweet" className="formBtn"/>
            </form>
            <span onClick={toggleEditing} className="formBtn cancelBtn">
                Cancel
                </span>
            </>
         ) 
         : 
        (<>
        <h4>{nweetObj.text}</h4>
        {nweetObj.attachmentURL && <img src={nweetObj.attachmentURL} />}
        { isOwner && (
            <div className="nweet__actions">
                <span onClick={onDeleteClick} >
                    <FontAwesomeIcon icon={faTrash}/>
                </span>
                <span onClick={toggleEditing} >
                    <FontAwesomeIcon icon={faPencilAlt}/>
                </span>
            </div>
            )}
        </>
    )}    
    </div> 
    );
};

export default Nweet;