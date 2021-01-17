import React from "react";
// import Button from 'react-bootstrap/Button';
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";



const NavigationBar = () => {
  return (
    <div className="navbar-div">
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar"
        id="navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="wbs.com">
            <strong>Henry Oluoma</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <a
              className="btn btn-primary btn-rounded my-0 txt-white"
              href="/"
              target="_blank"
            >
              View CV
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
