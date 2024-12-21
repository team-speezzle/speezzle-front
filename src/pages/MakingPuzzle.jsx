import '../styles/makingPuzzle.css'
import Button from '../components/Button'
import squirrel2 from '../assets/squirrel2.svg'

const MakingPuzzle = () => {
    return (
        <div className='makingGroup-container'>
            <img src={squirrel2} alt='squirrel2'/>
            <Button text='퍼즐생성하기'/>
        </div>
    )
}

export default MakingPuzzle