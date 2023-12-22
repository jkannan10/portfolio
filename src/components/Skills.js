import React from "react";
import "../styles/skills.css";
import uiImage from "../Assests/ui design.jpg";
import backend from "../Assests/backend.jpg";
import webdesign from "../Assests/webdesigner.jpg";
function Skills() {
  return (
    <div className="mainWrapper">
      <h1 className="h1 text-white">SKILLS</h1>
      <div className="container-fluid wrapper">
        <div className="row gx-3">
          <div className="col col-3 contentWrapper me-5">
            <div className="mb-1">UI/UX DESIGNER</div>
            <img src={uiImage} alt="uiimage" className="img-fluid mb-1 image" />
            <div className="content">
              I am a passionate UI/UX designer with a keen eye for detail and a
              focus on creating intuitive and visually appealing user
              experiences. My goal is to blend functionality with aesthetics to
              deliver delightful and user-friendly designs.
            </div>
          </div>
          <div className="col col-3 contentWrapper me-5">
            <div className="mb-1">BACKEND DEVELOPER</div>
            <img src={backend} alt="uiimage" className="img-fluid mb-1 image" />
            <div className="content">
              I am a versatile mobile app developer with a focus on creating
              seamless and intuitive user experiences. My expertise lies in
              building cross-platform applications that blend functionality with
              an elegant design.
            </div>
          </div>
          <div className="col col-3 contentWrapper ">
            <div className="mb-1">WEB DESIGNING</div>
            <img
              src={webdesign}
              alt="uiimage"
              className="img-fluid mb-1 image"
            />
            <div className="content">
              I am a frontend developer with a passion for creating visually
              stunning and responsive web applications. My focus is on crafting
              user interfaces that enhance the overall user experience and bring
              ideas to life.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
