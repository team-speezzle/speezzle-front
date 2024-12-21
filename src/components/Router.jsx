import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import MakePuzzle from "../pages/makePuzzle";
import MakingPuzzle from "../pages/MakingPuzzle";
import SignUp from "../pages/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<MakingPuzzle />} />
        <Route path="/make-puzzle" element={<MakePuzzle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
