import React from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import       Auth from "routes/Auth";
import       Home from "routes/Home";
import    Profile from "routes/Profile";
import Navigation from "components/Navigation";


/*
isLoggedIn && <Navigation /> --> 무조건 true여야만 Navagation component 출력함
*/

const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => { 
    return (
    <Router>
        {isLoggedIn && <Navigation userObj={userObj} />}
        <Switch>
            {isLoggedIn ? (
                <div
                    style={{
                        maxWidth: 800,
                        width: "100%",
                        margin: "0 auto",
                        marginTop: 80,
                        display: "flex",
                        justifyContent: "center",
                    }}>
                    <Route exact path="/">
                    <Home userObj={userObj} />
                    </Route>
                    <Route exact path="/profile">
                    <Profile refreshUser={refreshUser} userObj={userObj}/>
                    </Route>
                    <Redirect from="*" to="/" /> 
                </div>
            ) : (
            <>
                <Route> 
                    <Auth exact path="/"/> 
                </Route> 
                <Redirect from="*" to="/" />
            </>
            )}
        </Switch>
    </Router>
    );
};
export default AppRouter;