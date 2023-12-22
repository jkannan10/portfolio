import React from "react";
import "../styles/about.css";
import AboutPicture from "../Assests/aboutimg.jpeg";

function About() {
  return (
    <div className="mainwrapper">
      {" "}
      <h1 className="h1 text-white">ABOUT</h1>{" "}
      <div className="container-fluid wrapper">
        {" "}
        <div className="row">
          {" "}
          <div className="col col-10 details">
            {" "}
            <div className="picture">
              {" "}
              <img src={AboutPicture} alt="/" className="image" />{" "}
            </div>{" "}
            <div
              className="Aboutcontent"
              style={{
                background: "rgb(8, 44, 121)",
                border: "2px solid white",
              }}
            >
              {" "}
              <h1 className="text-center">
                {" "}
                Hi, I am <span className="text-black">Jayakannan</span>{" "}
              </h1>{" "}
              <p className="text-center">
                {" "}
                I am a fullstack developer. I can provide clean code and pixel
                perfect design.I also make website more and more interactive
                with web animation.{" "}
              </p>{" "}
              <table>
                {" "}
                <tr>
                  {" "}
                  <td>Name</td>{" "}
                  <td>
                    {" "}
                    <span className="mx-3">:</span>JK{" "}
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td>AGE</td>{" "}
                  <td>
                    {" "}
                    <span className="mx-3">:</span>19{" "}
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td>NATIONALITY</td>{" "}
                  <td>
                    {" "}
                    <span className="mx-3">:</span>INDIAN{" "}
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td>LANGUAGES </td>{" "}
                  <td>
                    {" "}
                    <span className="mx-3">:</span>TAMIL , ENGLISH{" "}
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td>ADDRESS</td>{" "}
                  <td>
                    {" "}
                    <span className="mx-3">:</span>29 , SCHOOL STREET ,
                    ARUPPUKOTTAI{" "}
                  </td>{" "}
                </tr>{" "}
                <tr>
                  {" "}
                  <td>MOBILE</td>{" "}
                  <td>
                    {" "}
                    <span className="mx-3">:</span>7358249279{" "}
                  </td>{" "}
                </tr>{" "}
              </table>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default About;
