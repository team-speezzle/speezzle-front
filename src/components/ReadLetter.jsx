import '../styles/readLetter.css'

const ReadLetter = ({author, letter, setSee}) => {
    

    return (
        <div className='read-container'>
            <div className='read-letter'>
                <span className='from'>From. </span>
                <span>{author}</span>
                <div className='read'>
                    {letter}
                </div>
            </div>
            <button className='exit' onClick={() => setSee(false)}>닫기</button>
        </div>
    )
}

export default ReadLetter