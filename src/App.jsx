import "./App.css";
import Nav from "./components/navFolder/Nav";
import Landing from "./pages/landingFolder/Landing";
import Aboutcontact from "./pages/Aboutcontact/Aboutcontact";
import Projects from "./pages/projects/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPractice from "./pages/blog/BlogPractice";
import BlogPage from "./pages/blog/BlogPage";
import Stars from "./components/stars/Stars";
import Gridwave from "./components/gridWave/Gridwave";

function App() {
  return (
    <Router>
      <div className="star__stuff">
      <Stars />
      </div>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about-contact" element={<Aboutcontact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/practice-blog" element={<BlogPractice />} />
          <Route path="/practice/:id" element={<BlogPage />} />
          <Route path="/wave" element={<Gridwave />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
