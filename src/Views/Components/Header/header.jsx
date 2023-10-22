
import React from "react";
import "./header.css"; // Replace with your CSS file
import { Link } from "react-router-dom";

const YourNavbar = () => {
  return (
    <header className="header">
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <div className="header_outer_cont">
            <Link class="navbar-brand logo" to="/">
              Dhoondle <sup className="reserve">TM</sup>
            </Link>
            <div className="d-flex gap-3 pt-2 pe-3 ">
              <button className="appDownload">Download App</button>
            </div>
          </div>
        </div>
     
    </nav>
  </header>
  );
};

export default YourNavbar;
