import "./App.css";
import Nav from "./components/navFolder/Nav";
import Landing from "./pages/landingFolder/Landing";
import Aboutcontact from "./pages/Aboutcontact/Aboutcontact";
import Projects from "./pages/projects/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about-contact" element={<Aboutcontact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/practice-blog" element={null} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
