/* 
  Component name: Nweet.js 
  Description: Nweet message update and delete component (if your own nweet) 
  Author: Hyun-wook Hong
*/
import { dbService } from "myBase";
import React, {useState} from "react";

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);

    const onDeleteClick = async () => {
        const OK = window.confirm("Are you sure you want to delete this nweet?");
        //console.log(OK)
        if(OK){
            // delete nweet
            await dbService.doc(`nweets/${nweetObj.id}`).delete();
        }
        else if(!OK){
            // return
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
    <div>
        { editing ? ( 
            <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Edit your nweet" value={newNweet} required onChange={onChange}/>
                <input type="submit" value="Update Nweet" />
            </form>
            <button onClick={toggleEditing}>Cancel</button>
            </>
         ) 
         : 
        (<>
        { isOwner && (
            <>
                <h4>{nweetObj.text}</h4>
                <button onClick={onDeleteClick} >Delete Nweet</button>
                <button onClick={toggleEditing} >Update Nweet</button>
            </>
            )}
        </>
    )}    
    </div> 
    );
};

export default Nweet;