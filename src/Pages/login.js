import '../css/Login.css';
import React from "react";
import {useNavigate} from "react-router-dom"; //리액트에서 버튼 이동



const Login = () =>{
    const navigate = useNavigate(); //useNavigate() hook 호출

    //회원가입자> 홈
    // 가입x> 경고창만 나오게

    const loginBtn = () =>{
        navigate("/");
    }

    return (
        <div className={"login-wrap"}>

            <h1>로그인</h1>
            <form method="POST" action="/loginProcess">
                <div className={"login-id-wrap"}>
                    <label htmlFor="userId">User 아이디:</label>
                    <input type="text" id="userId" name="user_id" />
                </div>
                <div className={"login-passwd-wrap"}>

                    <label htmlFor="userPw">비밀번호:</label>
                    <input type="password" id="userPw" name="user_pw" />

                </div>
                <div className={"loginBtn"}>
                    <button type="submit" onClick={loginBtn}>로그인</button>
                </div>
        {/*        <div className="loginBtn" onClick={loginBtn}>*/}
        {/*            로그인</button>*/}
        {/*</div>*/}
            </form>
        </div>
    );
};
export default Login;

