import "../styles/header.css";
import back_icon from "../assets/back_icon.svg";

const Header = ({text }) => {
  return (
    <header>
      <img src={back_icon} alt="back" />
      <h4>{text}</h4>
    </header>
  );
};

export default Header;
