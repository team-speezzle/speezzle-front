import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import MakePuzzle from "../pages/makePuzzle";
import MakingPuzzle from "../pages/MakingPuzzle";
import SignUp from "../pages/SignUp";
import Write from "../pages/write";
import Result from "../pages/result";
import Invite from "../pages/invite";
import Share from "../pages/share";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<MakingPuzzle />} />
        <Route path="/make-puzzle" element={<MakePuzzle />} />
        <Route path="/write/:id" element={<Write />} />
        <Route path="/invite/:id" element={<Invite />} />
        <Route path="/result" element={<Result />} />
        <Route path="/share/:id" element={<Share />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
