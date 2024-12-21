import "../styles/invite.css";
import copy from "../assets/copy.svg";
import Header from "../components/Header";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Invite = () => {
  const wallet = "https://naver.com"; // 복사할 텍스트 정의

  return (
    <>
      <Header text="윤뎌 윤뎌" />
      <div className="Layout">
        <span className="send">함께할 친구들을 초대해보세요!</span>
        <span className="share">
          <CopyToClipboard
            text={wallet}
            onCopy={() => alert("클립보드에 복사되었습니다.")}
          >
            <span className="URL">
              {wallet}
              <img src={copy} alt="복사 아이콘" />
            </span>
          </CopyToClipboard>
        </span>
      </div>
    </>
  );
};

export default Invite;
