import React from "react";
import Mindmap from "./component/mindmap";
import Present from "./component/Present";
import Select from "./component/Select";
import Previewmode from "./component/Previewmode"
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mindmap />} />
        <Route path="/present" element={<Present />} />
        <Route path="/selectpresent" element={<Select />} />
        <Route path="/Previewmode" element={<Previewmode />} />
      </Routes>
    </Router>
  );
}

export default App;
