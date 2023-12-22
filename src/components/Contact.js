import React from "react";
import "../styles/contact.css";
// import { Phone, Email, LocationOn } from "@material-ui/icons";
import Phone from "@mui/icons-material/Phone";
import Email from "@mui/icons-material/Email";
import LocationOn from "@mui/icons-material/LocationOn";
function Contact() {
  return (
    <>
      <h1 className="h1 text-start text-white">CONTACT</h1>
      <div className="container-fluid wrapper">
        <div className="flexWrap">
          <div className="inputWrap">
            <input
              type="text"
              className="form-control mb-3 form-control-lg input"
              placeholder="Enter your name"
            />
            <input
              type="email"
              className="form-control form-control-lg mb-3 input"
              placeholder="Enter your email"
            />
            <input
              type="text"
              className="form-control form-control-lg mb-3 input"
              placeholder="Enter your subject"
            />
            <textarea
              className="form-control form-control-lg mb-3 textarea"
              placeholder="Enter your message"
            ></textarea>
            <button className="btn btn-primary">Submit</button>
          </div>
          <div className="contactwrap">
            <div className="contact mb-3">
              <p>
                <Phone />
                Phone
              </p>
              <p>+91 7358249279</p>
              <p className="">+91 9360981698</p>
            </div>
            <div className="contact mb-3">
              <p>
                <Email />
                Email
              </p>
              <p>kannanjay004@gmail.com</p>
              <p className="">717821f218@kce.ac.in</p>
            </div>
            <div className="contact mb-3">
              <p>
                <LocationOn />
                Address
              </p>
              <p className="">29 , School Street</p>
              <p>Aruppukottai , Virudhunagar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
