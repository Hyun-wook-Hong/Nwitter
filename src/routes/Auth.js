import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { authService, firebaseInstance } from "../myBase";
import AuthForm from "components/AuthForm";

const Auth= () => {
    const onSocialClick = async (event) => {
        const {target:{name},
        } = event;
        let provider;
        if (name === "google"){
            // Google 소셜 로그인
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }else if(name === "github"){
            // GitHub 소셜 로그인
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }

        await authService.signInWithPopup(provider);
    }

    return(
    <div className="authContainer">
        <FontAwesomeIcon
            icon={faTwitter}
            color={"#04AAFF"}
            size="3x"
            style={{ marginBottm: 30 }}
        />
        <AuthForm />
        <div className="autoBtns">
            <button onClick={onSocialClick} name="google" className="authBtn">
                Continue with Google <FontAwesomeIcon icon={faGoogle}/>
                </button>
            <button onClick={onSocialClick} name="github" className="authBtn">
                Continue with GitHub <FontAwesomeIcon icon={faGithub}/>
                </button>
        </div>
    </div>);
};
export default Auth;