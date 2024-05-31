import React from "react";
import "./index.css";
import Home from "./Routes/Home";
import { Route, Routes, Router } from "react-router-dom";



function App() {
  return (
    <>
      {/* // <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/MyWebsite" element={<Home />} /> */}
        {/* <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gymapp" element={<GymAppProjectPage />} />
        <Route path="/wellness" element={<WellnessProjectPage />} />
        <Route path="/pickup" element={<PickupPage />} />
        <Route path="/blands" element={<BlandsPage />} />
        <Route path="/scrape" element={<ScrapePage />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* // </Router> */}
    </>
  );
}

export default App;
