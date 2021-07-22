import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  Goyal Techinal
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >



{/* <div className="container">
    <br />
    <div className="dropdown">
      <button type="button" className="btn btn-danger dropdown-toggle"
      data-toggle="dropdown" aria-haspopup="true"
      aria-expanded="false"> Profile </button>
      <div className="dropdown-menu"
      aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#"> Edit </a>
        <a className="dropdown-item" href="#"> Pwd </a>
        <a className="dropdown-item" href="#"> Account Info </a>
        <a className="dropdown-item" href="#"> Logout </a>
      </div>
    </div>
      </div> */}




                  <ul className="navbar-nav ml-auto mb-2 mb-lg-2">
                    <li className="nav-item">
                      <NavLink
                      exact
                        activeClassName="menu_active"
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/service"
                      >
                        Service
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
