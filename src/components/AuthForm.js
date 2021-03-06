import React, { useState } from "react";
import { authService } from "myBase";

const inputStyles = {};

const AuthForm = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) => {
        const { 
            target: {name, value} 
        } = event;
        if(name === "email"){
            setEmail(value);
        }else if(name === "password"){
            setPassword(value);        
        }
    };
    const onSubmit = async(event) =>{
        // 사용자가 컨트롤할 수 있도록, event를 Default 상태로 되돌려놓지 않겠다는 의미
        event.preventDefault();
        try{
            let data;
                if(newAccount){
                    // create account
                    data = await authService.createUserWithEmailAndPassword(
                        email, password
                    );
                }
                //else login
                else{
                    data = await authService.signInWithEmailAndPassword(
                        email, password
                    );
                }
                console.log(data);
        }catch(error){
            setError(error.message);
        }
    };

    const toggleAccount = () => setNewAccount((prev) => !prev);
    
    return (
    <>
        <form onSubmit={onSubmit} className="container">       
        <input 
            name="email"
            type="email" 
            placeholder="Email" 
            required 
            value={email} 
            onChange={onChange}
            className="authInput"
        />
        <input 
            name="password"
            type="password" 
            placeholder="Password" 
            required 
            value={password} 
            className="authInput"
            onChange={onChange}
        />
        <input type="submit" value={ newAccount ? "Create Account" : "Login" } className="authInput authSubmit"/>  
        {error && <span className="authError">{error}</span>}
    </form> 
    <span onClick={toggleAccount} className="authSwitch"> {newAccount ? "Sign in" : "Create Account"} </span>
    </>
    );
}

export default AuthForm;
