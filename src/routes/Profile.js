import { authService, dbService } from "myBase";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default ({ userObj }) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = () => {
        authService.signOut()
        history.push("/");
    };
    const onChange = (event) =>{
        const{
            target: { value },
        } = event;
        setNewDisplayName(value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName){
            await userObj.updateProfile({
                displayName: newDisplayName,
            });
        }
    };

    const getMyNweets = async () => 
    {
        /*
            SQL 구문으로 치면..
            SELECT * FROM nweets
                WHERE USER_ID = :내아이디
            ORDER BY createdAt

            이지만 Firestore는 noSQL 기반이므로 인덱스 생성해줘야함
        */

        const nweets = await dbService.collection("nweets")
                        .where("creatorID", "==", userObj.uid)
                        .orderBy("createdAt")
                        .get();
        console.log( nweets.docs.map((doc) => doc.data() ));
    };
    // userObj에서 '내 트윗목록'을 뽑아오기 위한 useEffect 함수 내의 getMyNweets 구현
    useEffect(() => {
        getMyNweets();
    }, []);

    return (
        <>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text" placeholder="Display name" value={newDisplayName} />
            <input type="submit" value="Update Profile" />
        </form>
        <button onClick={onLogOutClick}>Log Out</button>
        </>
        ); 
};