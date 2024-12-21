import "../styles/invite.css";
import copy from "../assets/copy.svg";
// import Header from "../components/Header";

const Invite = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="Layout">
        <span className="send">함께할 친구들을 초대해보세요!</span>
        <span className="share">
          https://naver.com
          <img src={copy} />
        </span>
      </div>
    </>
  );
};

export default Invite;
