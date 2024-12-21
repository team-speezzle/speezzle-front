import Header from "../components/Header";
import Button from "../components/Button";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    nickname: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [pwChk, setPwChk] = useState('');

  const handleData = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const signupSubmit = async () => {
    console.log(pwChk !== signupData.password);
    if (loading || pwChk !== signupData.password) return;
    setLoading(true);
    await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, signupData);
    navigate("/login");
    setLoading(false);
  };

  const handleMail = (e) => {
    setSignupData((prev) => ({
      ...prev,
      email: prev.email.split('@')[0] + "@" + e.target.value,
    }));
  };

  const handlePwChk = (e) => {
    setPwChk(e.target.value);
  }

  return (
    <>
      <Header title='회원가입' />
      <div className="signup">
        <div className="inputBox">
          <h4>이름</h4>
          <input
            type="text"
            placeholder="이름"
            name="nickname"
            onChange={handleData}
            value={signupData.nickname}
          />
          <p>4~12자/영문 소문자(숫자 조합 가능)</p>
        </div>
        <div className="inputBox">
          <h4>이메일</h4>
          <div className="email">
            <input
              type="text"
              placeholder="이메일"
              name="email"
              onChange={handleData}
              value={signupData.email.split("@")[0]}
            />
            <span>@</span>
            <select onChange={handleMail}>
              <option value="none">선택</option>
              <option value="gmail.com">gmail</option>
              <option value="naver.com">naver</option>
            </select>
          </div>
        </div>
        <div className="inputBox">
          <h4>비밀번호</h4>
          <input type="password" placeholder="비밀번호" name="password" onChange={handleData} value={signupData.password} />
          <input type="password" placeholder="비밀번호 재입력" onChange={handlePwChk} value={pwChk} />
          <p>6~20자/영문 대문자,소문자,숫자,특수문자 중 2가지 이상 조합</p>
        </div>
        <span />
        <Button text="가입하기" onClick={signupSubmit} />
      </div>
    </>
  );
};

export default SignUp;
