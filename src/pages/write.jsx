import "../styles/write.css";
import Header from "../components/Header";

import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Write = () => {
  const param = useParams();
  const [letterData, setLetterData] = useState({ letter: "", author: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleData = (e) => {
    const { name, value } = e.target;
    setLetterData((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async () => {
    if(loading) return;
    setLoading(true);
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/pieces/${param.id}`);
    if(data){
      setLoading(false);
      navigate('/result');
    }
  };

  return (
    <>
      <Header title="편지쓰기" />
      <div className="Layout">
        <input
          type="text"
          placeholder="작성자"
          className="author"
          name="author"
          onChange={handleData}
          value={letterData.author}
        />
        <textarea
          className="write"
          placeholder="메세지를 입력해주세요.(500자 이내)"
          maxLength={500}
          value={letterData.letter}
          onChange={handleData}
          name="letter"
        ></textarea>


        <button className="button" onClick={submit}>보내기</button>
      </div>
    </>
  );
};

export default Write;
