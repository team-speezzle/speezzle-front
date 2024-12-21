import { Link } from "react-router-dom";
import "../styles/result.css";
import Header from "../components/Header";

const Result = () => {
  return (
    <>
      <Header text="윤뎌 윤뎌"/>
      <div className="Layout">
        <span className="send">편지가 보내졌어요!</span>
        <p className="gray-text">당신만의 퍼즐을 만들어 친구에게 선물하세요!</p>
        <div className="link-wrap">
          <Link className="link" to='/login'>로그인</Link>
          <Link className="link" to='/signup'>회원가입</Link>
        </div>
      </div>
    </>
  );
};

export default Result;
