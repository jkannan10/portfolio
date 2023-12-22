import React from "react";
import "../styles/project.css";
import text from "../Assests/predictive text.jpeg";
import portfolio from "../Assests/portfolio.jpg";
import track from "../Assests/expense tracker.jpg";
function Project() {
  return (
    <div className="mainWrapper">
      <h1 className="h1 text-white">PROJECT</h1>
      <div className="container-fluid wrapper marginWrap">
        <div className="row gx-3">
          <div className="col col-3 contentWrapper me-5">
            <div className="mb-1">PREDICITVE INPUT </div>
            <img src={text} alt="uiimage" className="img-fluid mb-1 image" />
            <div className="content">
              A predictive input system employs machine learning algorithms to
              analyze user behavior and context, anticipating input based on
              patterns. By proactively suggesting relevant options, it enhances
              user efficiency and streamlines interactions.
            </div>
          </div>
          <div className="col col-3 contentWrapper me-5 ">
            <div className="mb-1">PORTFOLIO</div>
            <img
              src={portfolio}
              alt="uiimage"
              className="img-fluid mb-1 image"
            />
            <div className="content">
              It is a curated collection of projects, designs, or achievements
              that provides a tangible representation of one's expertise and
              creativity. Portfolios are instrumental in professional settings,
              allowing for a visual and tangible demonstration of capabilities.
            </div>
          </div>
          <div className="col col-3 contentWrapper me-3">
            <div className="mb-1">EXPENSE TRACKER</div>
            <img src={track} alt="uiimage" className="img-fluid mb-1 image" />
            <div className="content">
              An expense tracker is a user-friendly tool designed to monitor and
              manage financial transactions efficiently. It allows users to
              record, categorize, and analyze their expenses, providing valuable
              insights into spending patterns.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
