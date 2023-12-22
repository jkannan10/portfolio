import React from "react";
import "../styles/home.css";
import { Mail, LinkedIn, GitHub } from "@mui/icons-material";
function Home() {
  return (
    <div className="container-fluid text-white wrapper">
      <h1 className="text-center">
        Hi, I am <span className="text-black">Jayakannan</span>
      </h1>
      <p className="text-center">
        I am a fullstack developer. I can provide clean code and pixel perfect
        design.I also make website more and more interactive with web animation.
      </p>
      <div className="d-flex justify-content-evenly align-items-center ">
        <div className="me-3 hoverEffect">
          <Mail />
        </div>
        <div className="me-3 hoverEffect">
          <LinkedIn />
        </div>
        <div className="me-3 hoverEffect">
          <GitHub />
        </div>
      </div>
    </div>
  );
}

export default Home;
