import "../styles/write.css";
import Header from "../components/Header";

const Write = () => {
  return (
    <>
      <Header />
      <div className="Layout">
        <span className="name">To. 권민재님</span>
        <textarea
          className="write"
          placeholder="메세지를 입력해주세요.(500자 이내)"
          maxLength={500}
        ></textarea>
        <button className="button">보내기</button>
      </div>
    </>
  );
};

export default Write;
