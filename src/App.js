import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cover from "./pages/Cover";
import Invitation from "./pages/Invitation";
import Content from "./pages/Content";

function App() {
  return (
    <Router>
      <div className="div-left">
        <Cover />
      </div>
      <div className="div-right">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Invitation />}></Route>
          <Route path="/content" element={<Content />}></Route>          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
