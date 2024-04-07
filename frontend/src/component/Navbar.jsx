import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg"


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            IDeaHub
          </Link>
          
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Projects
                </Link>
              </li>
            </ul>
        </div>
        <div className="search-section">
            <ul className="navbar-nav">
                <li className="nav-item me-2">
                    <form className="text-primary" role="search">
                    <input
                        className="form-control form-control-sm me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    </form>
              </li>
              <li className="nav-item  me-2">
                <button className="btn btn-warning btn-sm" type="submit">
                  Search
                </button>
              </li>
              <li className="nav-item">
                <Link class="navbar-brand" to="#">
                    {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                    <img src={logo} width="30" height="30" alt=""/>
                </Link>
              </li>
            </ul>
        </div>
              
        </div>
      </nav>

    </div>
    
  );
};

export default Navbar;
