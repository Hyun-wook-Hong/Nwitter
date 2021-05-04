import React, {useState} from "react";
import { authService, dbService, firebaseInstance } from "../myBase";

// Tweet을 날릴 수 있는 Home route -> Firebase DB와 연동
// Firebase의 DB는 NoSQL임 (간단, 강력, Vㅔ리 플렉서블)

const Home= () => {
    const [nweet, setNweet] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        dbService.collection("nweets").add({ 
            nweet,
            createdAt: Date.now(),
         });
         // 데이터 보내고 나면 Nweet value는 빈 문자열로.
         setNweet("");
    }

    const onChange = (event) =>{
        const {
             target:{value}, 
            } = event;
            setNweet(value);
    };

    return(
    <div>
        <form onSubmit={ onSubmit }>
            <input value={nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
            <input type="submit" value="Nweet"/>
        </form>
    </div>
    );
    };

export default Home;