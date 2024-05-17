import React from "react";
import Blog from "./Routes/Blog";
import Home from "./Routes/Home";
import Projects from "./Routes/Projects";
import Contact from "./Routes/Contact";
import { Route, Routes, Router } from "react-router-dom";
import NavBar from "./Components/NavBar";
import GymAppProjectPage from "./Routes/GymAppRoute";
import WellnessProjectPage from "./Routes/WellnessRoute";
import PickupPage from "./Routes/PickupRoute";
import BlandsPage from "./Routes/BlandsRoute";
import ScrapePage from "./Routes/ScrapeRoute";

function App() {
  return (
    <>
      {/* // <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/MyWebsite" element={<Home />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gymapp" element={<GymAppProjectPage />} />
        <Route path="/wellness" element={<WellnessProjectPage />} />
        <Route path="/pickup" element={<PickupPage />} />
        <Route path="/blands" element={<BlandsPage />} />
        <Route path="/scrape" element={<ScrapePage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* // </Router> */}
    </>
  );
}

export default App;
