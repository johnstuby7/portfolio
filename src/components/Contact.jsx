import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p> <b>Email:</b> Johnstuby7@gmail.com</p> 
            <a  class="font-weight-light" href="https://github.com/johnstuby7" target="_blank">Github </a><br></br>
            <a href="https://www.linkedin.com/in/john-stuby-886a5749" target="_blank">LinkedIn </a><br></br>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;