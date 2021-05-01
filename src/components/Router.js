import React, {useState} from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";


const AppRouter = () => { 
    // login 했으면 home, 안 했으면 login 페이지로
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
    <Router>
        <Switch>
            {isLoggedIn ? (
                <>
                <Route exact path="/">
                 <Home />
                </Route>
                </>
            ) : (
            <Route> 
                <Auth exact path="/"/> 
            </Route> 
            )}
        </Switch>
    </Router>
    );
};
export default AppRouter;