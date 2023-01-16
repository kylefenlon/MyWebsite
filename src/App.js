import React from "react";
import "./index.css";
import Blog from "./Routes/Blog";
import Home from "./Routes/Home";
import Projects from "./Routes/Projects";
import Contact from "./Routes/Contact";
import { Route, Routes, Router } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      {/* // <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/MyWebsite" element={<Home />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* // </Router> */}
    </>
  );
}

export default App;
