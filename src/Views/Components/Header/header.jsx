
import React from "react";
import "./header.css"; // Replace with your CSS file

const YourNavbar = () => {
  return (
    <header className="header">
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <div className="header_outer_cont">
            <a class="navbar-brand logo">
              Dhoondle <sup className="reserve">TM</sup>
            </a>
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
