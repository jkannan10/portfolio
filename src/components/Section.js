import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import Journey from "./Journey";
import Project from "./project";
import { Routes, Route } from "react-router-dom";
function Section() {
  return (
    <div className="container">
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/journey" element={<Journey />}></Route>
        <Route path="/skill" element={<Skills />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default Section;
