import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "../myBase";
import Auth from "routes/Auth";

function App() {
  // firebase의 auth 모듈 호출
  // authService.currentUser => 사용자 로그인 여부 true or false 반환
  // login 했으면 home, 안 했으면 login 페이지로
  const [Init, setInit] = useState(false);

  // 5/3 login 후 로그인여부 확인하도록 isLoggedIn, useState 변경
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
      }else{ 
        setIsLoggedIn(false);
      }
      setInit(true);
    });

  }, []);
  return (
    <>
    { Init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing...." }
    <footer>&copy;  { new Date().getFullYear() } Nwitter</footer>
    </>
  );
}

export default App;
