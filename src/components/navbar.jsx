import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge pill secondary">{props.totalCounters}</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
