import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import MakePuzzle from '../pages/makePuzzle'
import MakingPuzzle from '../pages/MakingPuzzle'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/make-puzzle' element={<MakePuzzle />} />
        <Route path='/make-puzzle/intro' element={<MakingPuzzle />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router