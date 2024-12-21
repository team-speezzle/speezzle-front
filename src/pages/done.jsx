import "../styles/done.css";
import { Link, useParams } from "react-router-dom";

const Done = () => {
  const param = useParams();
  return (
    <div className="Layout">
      <p className="title">
        아래의 링크를 공유해
        <br />
        함께 퍼즐을 완성해보세요!
      </p>
      <p className="send">http://localhost:5173/puzzles/{param.id}</p>
      <Link className="link" to={`http://localhost:5173/write/{param.id}`}>
        편지쓰러 가기
      </Link>
    </div>
  );
};

export default Done;
