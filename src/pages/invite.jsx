import "../styles/invite.css";
import copy from "../assets/copy.svg";
import Header from "../components/Header";
import { useParams } from "react-router-dom";

const Invite = () => {
  const param = useParams();

  return (
    <>
      <Header />
      <div className="Layout_invite">
        <span className="send_invite">함께할 친구들을 초대해보세요!</span>
        <span className="share">
          <p className="textBox">http://localhost:5173/puzzles/{param.id}</p>
          <img src={copy} />
        </span>
      </div>
    </>
  );
};

export default Invite;
