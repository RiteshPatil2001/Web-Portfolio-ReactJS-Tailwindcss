import './App.css';
import Index from '../src/Components/Index/Index';
import Projects from '../src/Components/Projects/Projects'
import About from '../src/Components/About/About'
import Resume from '../src/Components/Resume/Resume'
import Certificates from '../src/Components/Certificates/Certificates'
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
        </Routes>
    </Router>
  );
}

export default App;
