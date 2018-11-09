import React from "react";
import "./Searchbar.css";

const Searchbar = () => (

    <form className="form-inline lg-6">
        <input
          className="form-control md-6"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-dark" type="submit">
          Search
        </button>
      </form>

);

export default Searchbar;