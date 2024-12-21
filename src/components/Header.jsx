import '../styles/header.css'
import back_icon from '../assets/back_icon.svg'

const Header = () => {
    return (
        <header>
            <img src={back_icon} alt="back"/>
            <h4>로그인</h4>
        </header>
    )
}

export default Header