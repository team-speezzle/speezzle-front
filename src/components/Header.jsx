import "../styles/header.css";
import back_icon from "../assets/back_icon.svg";

import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();

  return (
    <header>
      <img src={back_icon} alt="back" onClick={() => navigate(-1)} />
      <h4>{title}</h4>
    </header>
  );
};

export default Header;
