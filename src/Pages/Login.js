import "../css/Login.css";
import React, { useState } from "react";
import { BrowserRouter as Router, useNavigate, Link } from "react-router-dom";

//임시(로그인 db와 연동해서 맞으면 "/"로 넘어가기 )
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

            </label>
            <input
                id="input-id" className="user_id" typepe="text"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                placeholder="아이디"
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
        <div className={"all"}>
        <div className={"login-wrap"}>
            <div className="login-text">
            <form method="POST" action="/loginProcess">
                <LoginIdWrap />
                <div className={"login-passwd-wrap"}>
                    <label htmlFor="userPw"></label>
                    <input type="password" id="userPw" className="user_pw" placeholder="비밀번호" />
                </div>
                <div className={"loginBtn"} onClick={loginBtn}>
                    로그인
                </div>
            </form>
            <div className="under-login">
                <div className="stay-check">
                    <input type="checkbox" name="stay-btn" value="stay" className="stay-checkbox" />로그인 상태 유지
                </div>
                <Link to ="/join">회원가입</Link>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Login;