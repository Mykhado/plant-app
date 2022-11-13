import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light bg-opacity-75 shadow sticky-top fs-4">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}
        <NavLink to="./" end className="navbar-brand fs-3">
          ☠️NoTruffaut
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="">
                Home
              </a> */}
              <NavLink to="/" end className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                Features
              </a> */}
              <NavLink to="Details" className="nav-link">
                Details
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                Features
              </a> */}
              <NavLink to="Admin" className="nav-link">
                Administrateur
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
