import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/css">
            CSS
          </NavLink>
          <NavLink className="nav-item nav-link" to="/demo">
            Demo
          </NavLink>
          <NavLink className="nav-item nav-link" to="/resume">
            Resume
          </NavLink>
          <NavLink className="nav-item nav-link" to="/linkedin" target="_blank">
            LinkedIn
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;