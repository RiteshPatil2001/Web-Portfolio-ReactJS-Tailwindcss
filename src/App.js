import "./App.css";
import Index from "./Pages/Index";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Certificates from "./Pages/Certificates";
import Experinace from "./Pages/Experiance";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/experiance" element={<Experinace />} />
      </Routes>
    </Router>
  );
}

export default App;
