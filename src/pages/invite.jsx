import "../styles/invite.css";
import copy from "../assets/copy.svg";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

const Invite = () => {
  const param = useParams();
  const link = `http://localhost:5173/puzzles/${param.id}`;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        alert("링크가 복사되었습니다!");
      })
      .catch((error) => {
        console.error("복사 실패:", error);
        alert("링크 복사에 실패했습니다.");
      });
  };

  return (
    <>
      <Header />
      <div className="Layout_invite">
        <span className="send_invite">함께할 친구들을 초대해보세요!</span>
        <span className="share">
          <p className="textBox">{link}</p>
          <img src={copy} alt="Copy" onClick={handleCopy} />
        </span>
      </div>
    </>
  );
};

export default Invite;
