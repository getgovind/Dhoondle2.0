// import React from "react";
// import "./header.css";

// const Header = () => {
//   return (
//     <header className="header navbar navbar-expand-lg navbar-light bg-light fixed-top">
//       <nav class="navbar bg-body-tertiary">
//         <div class="container">
//           <div className="header_outer_cont">
//             <a class="navbar-brand">Dhoondle</a>

//             <div className="d-flex gap-3 pt-2 pe-3 ">
//               {/* <button className="header_btn">Sign In</button>
//               <button className="header_btn">Sign Up</button> */}
//               <button className="appDownload">Download App</button>
//               {/* <button className="header_btn">
//                 <img
//                   src="Assets\Images\header\play-storefordhoondle.png"
//                   alt=""
//                   style={{
//                     width: "100%",
//                     maxWidth: "150px",
//                     height: "100%",
//                     maxHeight: "40px",
//                   }}
//                 />
//               </button>
//               <button className="header_btn">
//                 <img
//                   src="Assets\Images\header\app-storefordhoondle.png"
//                   alt=""
//                 />
//               </button> */}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };
// export default Header;

import React from "react";
import "./header.css"; // Replace with your CSS file

const YourNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Dhoondle
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link " href="#">
                <button className="appDownload">Download App</button>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default YourNavbar;
