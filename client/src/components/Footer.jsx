import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-100 py-5 ">
      <div className="container py-5 my-2">
        <div className="row gy-4 gx-5 d-flex justify-content-evenly">
          <div className="col-lg-4 col-md-6">
            <h5 className="h1 text-white">JT</h5>
            <p className="small">
              Dive deeper into Johnson's taste. All genre. All platform. Updated
              monthly.
            </p>
            <p className="small mb-0">
              &copy; Copyrights. All rights reserved.
            </p>
          </div>
          <br/>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-white mb-3">Quick links</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
