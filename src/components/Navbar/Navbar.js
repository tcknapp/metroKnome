import React from "react";


const Navbar = () => (
  
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <a className="navbar-brand" href="/">
      metroKnome
    </a>
    <button
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/data">
            Data
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/tools">
            Tools
          </a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/resources">
            Resources
          </a>
        </li>
        
      </ul>
    </div>
  </nav>

);

export default Navbar;