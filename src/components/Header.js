import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import profileImage from "../Assests/img.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
function Header() {
  const color = { color: "white" };
  return (
    <>
      <div className="container-fluid profileContainer">
        <div className="row mt-4 pictureContainer">
          <img src={profileImage} alt="profilepic" className=" mb-3 profile" />
        </div>
        <div className="NAVBAR">
          <div className="row navigation">
            <Link to="">HOME</Link>
          </div>
          <div className="row navigation">
            {" "}
            <Link to="/About">ABOUT</Link>
          </div>
          <div className="row navigation">
            <Link to="/Journey">JOURNEY</Link>
          </div>
          <div className="row navigation">
            <Link to="/Skill">SKILLS</Link>
          </div>
          <div className="row navigation">
            <Link to="/project">PROJECT</Link>
          </div>
          <div className="row navigation">
            <Link to="/Contact">CONTACT</Link>
          </div>
        </div>
        <div className="footerBar">
          <div className="nav-item">
            <a href="https://github.com/jkannan10" target="_blank">
              <GitHubIcon style={color} />
            </a>
          </div>
          <div className="nav-item">
            <a
              href="www.linkedin.com/in/jayakannan-a-3b6a2722a"
              target="_blank"
            >
              <LinkedInIcon style={color} />
            </a>
          </div>
          <div className="nav-item">
            <InstagramIcon />
          </div>
          <div className="nav-item">
            <a href="mailto:kannanjay004@gmail.com">
              <MailIcon style={color} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
