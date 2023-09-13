import React from "react";
import "./getApp.css";

const DownloadApp = () => {
  const playStoreUrl = "YOUR_PLAY_STORE_URL_HERE"; // Replace with your Play Store URL

  return (
    <section className="getapppagesection">
      <div className="container">
        <div className="row customer_row">
          {/* <div className="mobileApp"> */}
          <div className="contentGetApp">
            <div className="DownloadApp m-5">
              <h1 className="homepagetext m-0">
                <span className="homepagetextcolor m-0">Connect with us </span>
                from anyware
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
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
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
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </button>
              </div>
            </div>
            <div className="mobAppImg">
              <img
                src="Assets\Images\header\flamate-app-image.webp"
                alt=""
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  height: "100%",
                  maxHeight: "646px",
                }}
              />
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default DownloadApp;
