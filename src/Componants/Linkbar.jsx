// importing components
import React from 'react';
import { NavLink } from "react-router-dom";
import '../App.css';

const Linkbar = () => {
  return (
    // navbar using bootstrap
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-lg-center pe-lg-5 me-lg-5"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink exact to="/" className="nav-link fs-5 " activeClassName="active">
              All
            </NavLink>
            <NavLink to="/FullStack" className="nav-link fs-5 " activeClassName="active">
              Full Stack Development
            </NavLink>
            <NavLink to="/DataScience" className="nav-link fs-5 " activeClassName="active">
              Data Science
            </NavLink>
            <NavLink to="/CyberSecurity" className="nav-link fs-5 " activeClassName="active">
              Cyber Security
            </NavLink>
            <NavLink to="/Career" className="nav-link fs-5 " activeClassName="active">
              Career
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Linkbar;