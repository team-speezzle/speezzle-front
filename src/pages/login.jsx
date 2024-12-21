import '../styles/login.css'
import Header from '../components/Header'
import Button from '../components/Button'
import squirrel_pic from '../assets/squirrel.svg'

const Login = () => {

    return (
        <>
            <Header title='로그인' />
            <main className="login">
                <h2>스피즐입니다.</h2>
                <p>회원 서비스 이용을 위해 로그인해주세요.</p>
                <div className="input">
                    <input type="text" placeholder='아이디'/>
                    <input type="text" placeholder='비밀번호'/>
                </div>
                <Button text='로그인하기'/>
                <img src={squirrel_pic} alt="squirrel"/>
            </main>
        </>
    )
}

export default Login