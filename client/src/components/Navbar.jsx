import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../logo/png/logo-no-background.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <i className="bi bi-list"></i>
          </span>
        </button>
        <Link className="navbar-brand py-4" to="/">
          <img className="logo img-fluid" src={Logo}></img>
        </Link>
        <button type="button" className="btn btn-link mx-2 border-0">
          <span>
            <i className="bi bi-cart"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="nav justify-content-evenly">
            <li className="nav-item">
              <Link
                className="link"
                aria-current="page"
                to="/"
                style={{ color: "#DEDEDE" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/shop" style={{ color: "#DEDEDE" }}>
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="link" to="/contact" style={{ color: "#DEDEDE" }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
