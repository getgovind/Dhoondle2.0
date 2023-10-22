import React from "react";
// import "./getApp.css";
  const marginBottomStyle = {
    marginBottom: "4rem", // Add a margin of 4rem (adjust as needed)
  };
  const DownloadApp = () => {
    const playStoreUrl = "YOUR_PLAY_STORE_URL_HERE"; // Replace with your Play Store URL

    return (
      <section className="getapppagesection" style={marginBottomStyle}>
        <div className="container">
          <div className="row contentGetApp customer_row">
            <div className="col-md-5  customer_column">
              <div className="DownloadApp">
                <h1 className="homepagetext">
                  <span className="homepagetextcolor">Connect with us</span>{" "}
                  from anywhere
                </h1>
                <div className="shareroomtext">
                  Download our app from the Play Store OR App Store to get
                  started.
                </div>
                <div className="d-flex gap-3 pt-2 pe-3 ">
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
            <div className="col-md-6 customer_column">
              <div className="mobAppImg">
                <img
                  src="Assets/Images/header/mobileApp-removebg-preview.png"
                  alt="Mobile App"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default DownloadApp;
