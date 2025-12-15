import "./App.css";

import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header.jsx";
import Home from "../Home/Home.jsx";
import Footer from "../Footer/Footer.jsx";

import About from "../About/About.jsx";
import MiniProjects from "../MiniProjects/MiniProjects.jsx";
import Lightbyte from "../Lightbyte/Lightbyte.jsx";

function App() {
  return (
    <>
      <div className="page">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mini-projects" element={<MiniProjects />} />
          <Route path="/lightbyte" element={<Lightbyte />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
