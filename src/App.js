import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdvancedSkills from "./Components/Explore/AdvancedSkills";
import Basic from "./Components/Explore/Basic";
import Communication from "./Components/Explore/Communication";
import GetStarted from "./Components/Explore/GetStarted";
import Growth from "./Components/Learn/Growth";
import MiniRightNavbar from "./Components/Navbar/MiniRightNavbar";
import RightNavbar from "./Components/Navbar/RightNavbar";
import "./Styles/Styles.scss";

function App() {
  return (
    <Router>
      <div className="d-flex background">
        <div>
          <MiniRightNavbar />
          <RightNavbar />
        </div>
        <div className="col">
          <Routes>
            <Route path="/" element={<Basic />} />
          </Routes>
          <Routes>
            <Route path="/" element={<GetStarted />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Communication />} />
          </Routes>
          <Routes>
            <Route path="/" element={<AdvancedSkills />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/growth" element={<Growth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
