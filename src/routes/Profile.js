import { authService } from "myBase";
import React from "react";

export default () => {
    const onLogOutClick = () => authService.signOut();
    return <>
        <button onClick={onLogOutClick}>Log Out</button>
        </>; 
};