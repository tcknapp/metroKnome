import React from "react";
import "./Navbar.css";
import Timer from "../Timer";


const Navbar = () => (
  
  <nav className="navbar navbar-expand-md navbar-light bg-light">
    <a className="navbar-brand" href="/home">
      metroKnome <img src= "../images/mknomeblk.png" alt="knome" height=" 30px"/>
    </a>

    <button
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="#navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ml-auto">
        
        <li className="nav-item">
          <a className="nav-link" href="/about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/data">
            Data
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/settings">
          Settings
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/tools">
          Tools
          </a>
        </li>
       

        
        {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/tools">Tools</a>
          <a className="dropdown-item" href="/resources">Resources</a>
        </div>
        </li> */}
      </ul>
    </div>
  </nav>

);

export default Navbar;
