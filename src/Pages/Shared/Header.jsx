import React from "react";
import { NavLink } from "react-router-dom";
import navLogo from "../../Photos/icon/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid container">
          <a class="navbar-brand" href="#">
            <img src={navLogo} alt="" width="290" height="39" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <div class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a>
                    <NavLink className="nav-link" to="/Home">
                      {" "}
                      Home
                    </NavLink>
                  </a>
                </li>

                <li class="nav-item">
                  <a>
                    <NavLink className="nav-link" to="/products">
                      {" "}
                      Products
                    </NavLink>
                  </a>
                </li>

                <li class="nav-item">
                  <a>
                    <NavLink className="nav-link" to="/Aboutus">
                      {" "}
                      Services
                    </NavLink>
                  </a>
                </li>
                <li class="nav-item">
                  <a>
                    <NavLink className="nav-link" to="/Contactus">
                      {" "}
                      Contact us
                    </NavLink>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
