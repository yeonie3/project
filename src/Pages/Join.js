import{Link} from 'react-router-dom';

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Join = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        // 회원가입 처리 로직
        console.log("회원가입 정보: ", { name, email, password });
        navigate("/login"); // 로그인 페이지로 이동
    };

    return (
        <div className="all">
            <h2>회원가입</h2>
            <form onSubmit={handleSignup}>
                <div className="input-wrap">
                    <label htmlFor="name">이름</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="이름을 입력하세요."
                        required
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="email">이메일</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="이메일을 입력하세요."
                        required
                    />
                </div>
                <div className="input-wrap">
                    <label htmlFor="password">비밀번호</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호를 입력하세요."
                        required
                    />
                </div>
                <button type="submit" className="signup-btn">
                    회원가입
                </button>
            </form>
        </div>
    );
};

export default Join;