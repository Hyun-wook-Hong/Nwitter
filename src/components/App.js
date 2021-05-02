import React, {useState} from "react";
import AppRouter from "components/Router";
import { authService } from "../myBase";
import Auth from "routes/Auth";

function App() {
  // firebase의 auth 모듈 호출
  // authService.currentUser => 사용자 로그인 여부 true or false 반환
  // login 했으면 home, 안 했으면 login 페이지로
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy;  { new Date().getFullYear() } Nwitter</footer>
    </>
  );
}

export default App;
