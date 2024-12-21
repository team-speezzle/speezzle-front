import '../styles/makingPuzzle.css'
import Button from '../components/Button'
import squirrel2 from '../assets/squirrel2.svg'
import { useNavigate } from 'react-router-dom'

const MakingPuzzle = () => {
    const navigate = useNavigate();
    return (
        <div className='makingGroup-container'>
            <img src={squirrel2} alt='squirrel2'/>
            <Button text='퍼즐생성하기' onClick={() => navigate('/make-puzzle')}/>
        </div>
    )
}

export default MakingPuzzle