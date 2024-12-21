import '../styles/makingGroup.css'
import Button from '../components/Button'
import squirrel2 from '../assets/squirrel2.svg'

const MakingGroup = () => {
    return (
        <div className='makingGroup-container'>
            <img src={squirrel2} alt='squirrel2'/>
            <Button />
        </div>
    )
}

export default MakingGroup