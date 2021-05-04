import React, {useState} from "react";
import { authService, firebaseInstance } from "../myBase";

// Tweet을 날릴 수 있는 Home route -> Firebase DB와 연동

const Home= () => {
    const [nweet, setNweet] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
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