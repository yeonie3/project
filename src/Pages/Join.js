import { Link, useNavigate } from 'react-router-dom';
import "../css/Join.css";
import React, { useState } from "react";

const Join = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        id: "",
        pwd: "",
        name: "",
        birthdate: "",
        phone: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSignup = (e) => {
        e.preventDefault();
        // 회원가입 처리 로직
        console.log("회원가입 정보: ", form);
        navigate("/login"); // 로그인 페이지로 이동
    };

    return (
        <div className="all">
            <div className={"join-wrap"}>
                <div className={"join-text"}>
                    <h2>회원가입(user)</h2>
                    <form onSubmit={handleSignup}>
                        <div className="input-id">
                            <label htmlFor="id">아이디</label>
                            <input
                                type="text"
                                id="id"
                                name={"id"}
                                value={form.id}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-pwd">
                            <label htmlFor="pwd">비밀번호</label>
                            <input
                                type="password"
                                id="pwd"
                                name={"pwd"}
                                value={form.pwd}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-name">
                            <label htmlFor="name">이름</label>
                            <input
                                type="text"
                                id="name"
                                name={"name"}
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-birthdate">
                            <label htmlFor="birthdate">생년월일</label>
                            <input
                                type="date"
                                id="birthdate"
                                name={"birthdate"}
                                value={form.birthdate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-phone">
                            <label htmlFor="phone">휴대폰 번호</label>
                            <input
                                type="number"
                                id="phone"
                                name={"phone"}
                                value={form.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-email">
                            <label htmlFor="email">이메일</label>
                            <input
                                type="text"
                                id="email"
                                name={"email"}
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="signup-btn">
                            회원가입
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Join;