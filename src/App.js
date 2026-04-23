import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h2 className="logo">Portfolio</h2>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;