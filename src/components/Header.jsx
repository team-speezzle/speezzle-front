import '../styles/header.css'
import back_icon from '../assets/back_icon.svg'

const Header = ({ title }) => {
    return (
        <header>
            <img src={back_icon} alt="back"/>
            <h4>{ title }</h4>
        </header>
    )
}

export default Header