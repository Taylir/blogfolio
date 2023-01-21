import "./App.css";
import Nav from "./components/navFolder/Nav";
import Landing from "./pages/landingFolder/Landing";
import Aboutcontact from "./pages/Aboutcontact/Aboutcontact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
        <Routes>
          <Route path="/"  element={<Landing />} />
          <Route path="/about-contact" element={<Aboutcontact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
