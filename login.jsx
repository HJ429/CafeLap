import React, { useState } from "react";
import "./login.css";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const returnToCafe = () => {
        window.location.href = '#'; // 원하는 링크로 변경
    };
  
    const navigateToComm = () => {
        window.location.href = '#'; // 원하는 링크로 변경
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // 기본 폼 제출 방지

        if (username === "" || password === "") {
            setErrorMessage("아이디 또는 비밀번호를 확인해주세요.");
        } else {
            setErrorMessage("");
            alert("로그인 성공하셨습니다.");
            // 로그인 후 처리
        }
    };

    return (
        <div className="login-total-box">
            <div className="login-container">
            <h2>카페연구실 로그인</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="아이디"
                    required
                />
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="비밀번호"
                    required
                />
                <input type="submit" value="로그인" />
                {errorMessage && <div className="error">{errorMessage}</div>}
            </form>
                <div className="footer">
                    <a href="cafemain.jsx" id="main-link">
                        메인으로
                    </a>
                    <a href="signup.jsx" id="signup-link">
                        회원가입
                    </a>
                </div>
            </div>
        </div>
        
    );
};

export default LoginPage;
