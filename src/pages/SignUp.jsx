import Header from '../components/Header'
import Button from '../components/Button'
import '../styles/signup.css'

const SignUp = () => {
    return (
        <>
            <Header />
            <div className='signup'>
                <div className='inputBox'>
                    <h4>이름</h4>
                    <input type='text' placeholder='이름'/>
                    <p>4~12자/영문 소문자(숫자 조합 가능)</p>
                </div>
                <div className='inputBox'>
                    <h4>이메일</h4>
                    <div className='email'>
                        <input type='text' placeholder='이메일'/>
                        <span>@</span>
                        <select>
                            <option value='none'>선택</option>
                            <option value='gmail'>gmail</option>
                            <option value='naver'>naver</option>
                        </select>
                    </div>
                </div>
                <div className='inputBox'>
                    <h4>비밀번호</h4>
                    <input type='text' placeholder='비밀번호'/>
                    <input type='text' placeholder='비밀번호 재입력'/>
                    <p>6~20자/영문 대문자,소문자,숫자,특수문자 중 2가지 이상 조합</p>
                </div>
                <span />
                <Button text='가입하기'/>
            </div>
        </>
    )
}

export default SignUp