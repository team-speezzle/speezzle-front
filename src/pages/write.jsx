import "../styles/write.css";
import Header from "../components/Header";
import Button from "../components/Button";

const Write = () => {
  return (
    <>
      <Header text="윤뎌 윤뎌" />
      <div className="Layout">
        <span className="name">To.권민재님</span>
        <textarea
          className="write"
          placeholder="메세지를 입력해주세요.(500자 이내)"
          maxLength={500}
        ></textarea>
        <Button text="보내기"></Button>
      </div>
    </>
  );
};

export default Write;
