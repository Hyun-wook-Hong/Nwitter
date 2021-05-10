import React, {useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { authService, dbService, firebaseInstance, storageService } from "myBase";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";

// Tweet을 날릴 수 있는 Home route -> Firebase DB와 연동
// Firebase의 DB는 NoSQL임 (간단, 강력, Vㅔ리 플렉서블)

// 5/4 Auth.js에서 로그인할 때 기록한 유저 정보를 props로 받아왔다.
const Home= ({ userObj }) => {
    //console.log(userObj);
    // firebase DB에서 가져온 nweet state
    const [nweets, setNweets] = useState([]);

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

    return(
        <div>
            <NweetFactory userObj={userObj} />
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