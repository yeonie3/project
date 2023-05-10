import "../css/Login.css";
import React, { useState } from "react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

//임시
const LoginIdWrap = () => {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const handleInputFocus = () => setIsInputFocused(true); //로그인함수체크 불리언
    const handleInputBlur = (e) => {
        setIsInputFocused(e.target.value !== "");
    };

    return (
        <div className="login-id-wrap">
            <label
                className={isInputFocused ? "hidden-label" : ""}
                htmlFor="input-id"
            >
                아이디
            </label>
            <input
                id="input-id"
                className="input-id"
                type="text"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </div>
    );
};

const Login = () => {
    const navigate = useNavigate();

    const loginBtn = () => {
        navigate("/");
    };

    return (
        <div className={"login-wrap"}>
            <h1>로그인</h1>
            <form method="POST" action="/loginProcess">
                <LoginIdWrap />
                <div className={"login-passwd-wrap"}>
                    <label htmlFor="userPw">비밀번호:</label>
                    <input type="password" id="userPw" name="user_pw" />
                </div>
                <div className={"loginBtn"}>
                    {/*<button className="loginBtn" onClick={loginBtn}>*/}
                    {/*    로그인*/}
                    {/*</button>*/}
                    로그인
                </div>
            </form>
        </div>
    );
};

export default Login;