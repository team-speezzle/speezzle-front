import { useRef, useState } from "react";
import axios from "axios";
import "../styles/makePuzzle.css";
import Header from "../components/Header";
import Button from "../components/Button";
import customAxios from "../libs/axios/customAxios";
import { useNavigate } from "react-router-dom";

const MakePuzzle = () => {
  const fileRef = useRef(null);
  const [puzzleData, setPuzzleData] = useState({
    title: "",
    email: "",
    sendDate: "",
    puzzlePicture: "",
  });
  const [time, setTime] = useState("00:00"); // 시간 추가
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFile = async () => {
    const file = fileRef.current?.files[0];
    if (!file) {
      alert("파일을 선택해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      `${import.meta.env.VITE_PICTURE_API}/image/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setPuzzleData((prev) => ({
      ...prev,
      puzzlePicture: `https://filemosimgi.cher1shrxd.me/mosimgi-images/${response.data}`,
    }));
  };

  const handleData = (e) => {
    const { name, value } = e.target;
    setPuzzleData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const submit = async () => {
    if (loading) return;
    setLoading(true);

    const { title, email, sendDate, puzzlePicture } = puzzleData;

    const formattedDate = `${sendDate}T${time}:00`;

    const payload = {
      title,
      email,
      sendDate: formattedDate,
      puzzlePicture,
    };

    try {
      const { data } = await customAxios.post(
        `${import.meta.env.VITE_API_URL}/puzzles`,
        payload
      );
      if (data) {
        setLoading(false);
        navigate(`/invite/${data.id}`);
      }
    } catch (error) {
      console.error("Error submitting puzzle:", error);
      setLoading(false);
    }
  };

  return (
    <div className="make-puzzle">
      <Header title="퍼즐생성" />
      <div className="main">
        <p className="section-title">퍼즐이름</p>
        <input
          type="text"
          className="input"
          placeholder="이름"
          name="title"
          onChange={handleData}
          value={puzzleData.title}
        />
        <p className="gray-text">
          친구에게 보여지는 편지의 제목이니 신중하게 작성해주세요.
        </p>
        <p className="section-title">편지가 갈 이메일</p>
        <input
          type="text"
          className="input"
          placeholder="이메일"
          name="email"
          onChange={handleData}
          value={puzzleData.email}
        />
        <p className="section-title">편지 보낼 시기</p>
        <input
          type="date"
          className="input"
          name="sendDate"
          onChange={handleData}
          value={puzzleData.sendDate}
        />
        <div className="margin"></div>
        <input
          type="time"
          className="input"
          onChange={handleTimeChange}
          value={time}
        />
        <p>사진 선택</p>
        <input
          type="file"
          className="input"
          ref={fileRef}
          onChange={handleFile}
        />
      </div>
      <div className="spacer"></div>
      <div className="button-wrap">
        <Button text="생성하기" onClick={submit} />
      </div>
    </div>
  );
};

export default MakePuzzle;
