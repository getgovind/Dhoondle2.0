// import React from "react";
// import "./hompage.css";

// const HomePage = () => {
//   return (
//     <>
//       <section className="homepagesection">
//         <div className="container">
//           <div className="row customer_row" >
//             <div className="col-md-5 customer_column">
//                 <div >
//               <p className="homepagetext m-0">
//                 find <span className="homepagetextcolor">like-minded</span>
//               </p>
//               <p className="homepagetext m-0">rooms & PGs</p>
//               <p className="shareroomtext">
//                 Simple registered on Dhoondle App and Find your favourite rooms
//                 & PGs
//               </p>
//               <div className="d-flex gap-3 pt-2 pe-3 ">
//               <button className="header_btn">
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
//               </button>
//             </div></div>
//             </div>

//             <div className="col-md-5 customer_column">
//               <img
//                 src="Assets\Images\header\home-imagedhoondle.webp"
//                 alt=""
//                 className="img-fluid homepageimg"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HomePage;
import React from "react";
import "./hompage.css";
const marginBottomStyle = {
  marginBottom: "4rem",
  // marginTop: "4rem", // Add a margin of 4rem (adjust as needed)
};
// const marginTopStyle = {
//    // Add a margin of 4rem (adjust as needed)
// };
const HomePage = () => {
  return (
    <>
      <section className="homepagesection" style={marginBottomStyle}>
        <div className="container">
          <div className="row customer_row">
            <div className="col-md-6 col-sm-12 customer_column">
              <div>
                <p className="homepagetext m-0">
                  Find <span className="homepagetextcolor">like-minded</span>
                </p>
                <p className="homepagetext m-0">rooms & PGs</p>
                <p className="shareroomtext">
                  Simply register on Dhoondle App and find your favorite rooms &
                  PGs
                </p>
                <div className="d-flex gap-3 pt-2 pe-3">
                  <button className="header_btn">
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
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 customer_column">
              <img
                src="Assets\Images\header\home-imagedhoondle.webp"
                alt=""
                className="img-fluid homepageimg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
