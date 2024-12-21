import "../styles/share.css";
import puzzle1 from "../assets/puzzle/1.svg";
import puzzle2 from "../assets/puzzle/2.svg";
import puzzle3 from "../assets/puzzle/3.svg";
import puzzle4 from "../assets/puzzle/4.svg";
import puzzle5 from "../assets/puzzle/5.svg";
import puzzle6 from "../assets/puzzle/6.svg";
import puzzle7 from "../assets/puzzle/7.svg";
import puzzle8 from "../assets/puzzle/8.svg";
import puzzle9 from "../assets/puzzle/9.svg";
import puzzle10 from "../assets/puzzle/10.svg";
import puzzle11 from "../assets/puzzle/11.svg";
import puzzle12 from "../assets/puzzle/12.svg";
import ReadLetter from "../components/ReadLetter";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Share = () => {
  const [pices, setPices] = useState([]);
  const [pic, setPic] = useState("");
  const [auth, setAuth] = useState("");
  const [letter, setLetter] = useState("");
  const [see, setSee] = useState(false);

  const param = useParams();
  const url = import.meta.env.VITE_API_URL;

  const pieceImgs = [
    puzzle1,
    puzzle4,
    puzzle7,
    puzzle10,
    puzzle2,
    puzzle5,
    puzzle8,
    puzzle11,
    puzzle3,
    puzzle9,
    puzzle6,
    puzzle12,
  ];

  const GetLetters = async () => {
    try {
      const response = await axios.get(`${url}/puzzles/${param.id}`);

      setPices(response.data.pieces);
      setPic(response.data.puzzlePicture);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const GetLetter = async (id) => {
    try {
      const response = await axios.get(`${url}/pieces/${id}`);

      setAuth(response.data.author);
      setLetter(response.data.letter);
      setSee(true);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    GetLetters();
  }, []);

  const { title, introduce1 } = {
    title: "권민재님 퍼즐을 확인해보세요",
    introduce1: "12명이 편지를 작성했어요!",
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "퍼즐 공유",
          text: `${title}\n${introduce1}`,
          url: "http://localhost:5173/",
        })
        .then(() => {
          console.log("공유 성공!");
        })
        .catch((error) => {
          console.error("공유 실패:", error);
        });
    } else {
      alert("공유 기능을 지원하지 않는 브라우저입니다.");
    }
  };

  return (
    <div className="Layout">
      <span className="memo">
        <span className="title">{title}</span>
        <span className="content">{introduce1}</span>
      </span>
      <div
        className="puzzlelayout"
        style={{ background: `url(${pic}) no-repeat center` }}
      >
        {pices.map((item, idx) => (
          <img
            src={pieceImgs[idx]}
            alt="img"
            className={`img${idx + 1}`}
            key={item.id}
            onClick={() => GetLetter(item.id)}
          />
        ))}
      </div>
      <button onClick={handleShare} className="button_1">
        내 퍼즐 공유하기
      </button>
      {see === true ? <ReadLetter author={auth} letter={letter} /> : <></>}
    </div>
  );
};

export default Share;
