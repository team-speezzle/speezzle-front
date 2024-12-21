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

const Share = () => {
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
      <div className="puzzlelayout">
        <img src={puzzle1} alt="img" className="img1" />
        <img src={puzzle4} alt="img" className="img2" />
        <img src={puzzle7} alt="img" className="img3" />
        <img src={puzzle10} alt="img" className="img4" />
        <img src={puzzle2} alt="img" className="img5" />
        <img src={puzzle5} alt="img" className="img6" />
        <img src={puzzle8} alt="img" className="img7" />
        <img src={puzzle11} alt="img" className="img8" />
        <img src={puzzle3} alt="img" className="img9" />
        <img src={puzzle9} alt="img" className="img10" />
        <img src={puzzle6} alt="img" className="img11" />
        <img src={puzzle12} alt="img" className="img12" />
      </div>
      <button onClick={handleShare}>내 퍼즐 공유하기</button>
    </div>
  );
};

export default Share;
