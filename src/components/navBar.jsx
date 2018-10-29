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
          <NavLink className="nav-item nav-link" to="/heroes">
            Heroes
          </NavLink>
          <NavLink className="nav-item nav-link" to="/about">
            About
          </NavLink>
          <a
            href="https://github.com/ramzafl/hotsgamesites"
            className="nav-item nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
          <li className="nav-item nav-link social">
            <a href="https://twitter.com/TheTallanasty/">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li className="nav-item nav-link social">
            <a href="http://github.com/ramzafl">
              <i className="fa fa-github" />
            </a>
          </li>
          <li className="nav-item nav-link social">
            <a href="https://www.linkedin.com/in/brent-m-thompson/">
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
