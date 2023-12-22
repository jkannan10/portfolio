import React from "react";
import "../styles/journey.css";
import SchoolIcon from "@mui/icons-material/School";

function Journey() {
  return (
    <div className="mainWrapper">
      <h1 className="h1 text-white journey">JOURNEY</h1>
      <div className="container-fluid wrapper adjust">
        <div className="row mt-5">
          <div className="col col-10 column">
            <div className="educationContent me-4">
              <div className="education">
                <h3 className="h3 text-white">
                  <span className="icon">
                    <SchoolIcon />
                  </span>
                  karpagam College Of Enginnering
                </h3>
                <p className="text-white pp">2021 - 2025</p>
                <h5 className="h5 text-white pp">
                  Bachelor Of Technology - 85%
                </h5>
              </div>
              <div className="education">
                <h3 className="h3 text-white">
                  <span className="icon">
                    <SchoolIcon />
                  </span>
                  <span>SBK HIGHER SECONDARY SCHOOL</span>
                </h3>
                <p className="text-white pp">2020 - 2021</p>
                <h5 className="h5 text-white pp">HSC - 90%</h5>
              </div>
              <div className="education">
                <h3 className="h3 text-white">
                  <span className="icon">
                    <SchoolIcon />
                  </span>
                  SALIYAR MAHAJANA HIGHER SECONDARY SCHOOL
                </h3>
                <p className="text-white pp">2018 - 2019</p>
                <h5 className="h5 text-white pp">SSLC - 89%</h5>
              </div>
            </div>
            <div className="acc text-white">
              <div className="ac mb-5 mt-2 py-4">
                <h2 className="">Projects</h2>
                <h2>5</h2>
              </div>
              <div className="ac mb-5 py-4">
                <h2 className=""> Certifications </h2>
                <h2>10</h2>
              </div>
              <div className="ac mb-5 py-4">
                <h2 className="">Problems Solved</h2>
                <h2>550</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
