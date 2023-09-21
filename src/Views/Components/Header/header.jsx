import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav class="navbar bg-body-tertiary">
        <div class="container">
          <div className="header_outer_cont">
            <a class="navbar-brand logo">
              Dhoondle <sup className="reserve">TM</sup>
            </a>

            <div className="d-flex gap-3 pt-2 pe-3 ">
              {/* <button className="header_btn">Sign In</button>
              <button className="header_btn">Sign Up</button> */}
              <button className="appDownload">Download App</button>
              {/* <button className="header_btn">
                <img
                  src="Assets\Images\header\play-storefordhoondle.png"
                  alt=""
                  style={{
                    width: "100%",
                    maxWidth: "150px",
                    height: "100%",
                    maxHeight: "40px",
                  }}
                />
              </button>
              <button className="header_btn">
                <img
                  src="Assets\Images\header\app-storefordhoondle.png"
                  alt=""
                />
              </button> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
