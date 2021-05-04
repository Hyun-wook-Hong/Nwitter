import React, { useState, useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "myBase";

function App() {
  // firebase의 auth 모듈 호출
  // authService.currentUser => 사용자 로그인 여부 true or false 반환
  // login 했으면 home, 안 했으면 login 페이지로
  const [Init, setInit] = useState(false);

  // 5/3 login 후 로그인여부 확인하도록 isLoggedIn, useState 변경
  // 5/4 01 userObj Object에서 User 로그인 정보를 받아오기 때문에 isLoggedIn이라는 state를 중복해서 쓸 필욘 없다. (선택하면됨, 난 선택)
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user){
        // 5/4 01 
        // setIsLoggedIn(true);
        setUserObj(user);
      }
      setInit(true);
    });

  }, []);
  return (
    <>
    { Init ? <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} /> : "Initializing...." }
    <footer>&copy;  { new Date().getFullYear() } Nwitter</footer>
    </>
  );
}

export default App;
