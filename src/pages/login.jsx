import "../styles/login.css";
import Header from "../components/Header";
import Button from "../components/Button";
import squirrel_pic from "../assets/squirrel.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleData = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const loginSubmit = async () => {
    if (loading) return;
    setLoading(true);
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, loginData);
    if (data) {
      localStorage.setItem("ACCESS_TOKEN", data.accessToken);
      localStorage.setItem("REFRESH_TOKEN", data.refreshToken);
      navigate('/');
    }
    setLoading(false);
  };

  return (
    <>
      <Header title="로그인" />
      <main className="login">
        <h2>스피즐입니다.</h2>
        <p>회원 서비스 이용을 위해 로그인해주세요.</p>
        <div className="input">
          <input
            type="text"
            placeholder="이메일"
            name="email"
            onChange={handleData}
            value={loginData.email}
          />
          <input
            type="text"
            placeholder="비밀번호"
            name="password"
            onChange={handleData}
            value={loginData.password}
          />
        </div>
        <Button text={loading ? "로그인 중..." : "로그인하기"} onClick={loginSubmit}/>
        <img src={squirrel_pic} alt="squirrel" />
      </main>
    </>
  );
};

export default Login;
