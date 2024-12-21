import React from 'react'
import '../styles/makePuzzle.css'
import Header from '../components/Header';

const MakePuzzle = () => {
  return (
    <div className="make-puzzle">
      <Header title='퍼즐생성' />
      <div className="main">
        <p className="section-title">퍼즐이름</p>
        <input type="text" className='input' />
      </div>
    </div>
  );
}

export default MakePuzzle