import '../styles/makingPuzzle.css'
import Button from '../components/Button'
import squirrel2 from '../assets/squirrel2.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const MakingPuzzle = () => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(!accessToken) {
            navigate('/signup');
        }
    },[accessToken]);

    return (
        <div className='makingGroup-container'>
            <img src={squirrel2} alt='squirrel2'/>
            <Button text='퍼즐생성하기' onClick={() => navigate('/make-puzzle')}/>
        </div>
    )
}

export default MakingPuzzle