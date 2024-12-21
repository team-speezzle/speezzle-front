import "../styles/button.css";


export default Button;

const Button = ({text, onClick}) => {

    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default Button

