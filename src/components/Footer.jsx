import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="footer">
      <footer class="footer-padding bg-dark fixed-bottom">
        <h3> Previous Employers</h3>
        <div class="float-container">
          <div class="float-child">
            <Link to={{ pathname: "https://hiregroundsoftware.com/" }} target="_blank" >
              HireGround Software
            </Link>
          </div>
          <div class="float-child">
            <Link to={{ pathname: "https://www.istockphoto.com/" }} target="_blank" >
              <b>Istock Photography</b>
            </Link>
          </div>
        </div>
        <div>

        </div>
    
      </footer>
    </div>
  );
}

export default Footer;