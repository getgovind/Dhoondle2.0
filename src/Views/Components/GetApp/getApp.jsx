import React from "react";
import "./getApp.css";

const DownloadApp = () => {
  const playStoreUrl = "YOUR_PLAY_STORE_URL_HERE"; // Replace with your Play Store URL

  return (
    <section className="getapppagesection">
      <div className="container">
        <div className="row customer_row">
          <div className="mobileApp">
            <div className="contentGetApp">
              <img
                src="Assets\Images\header\mobile.jpg"
                alt=""
                style={{
                  width: "100%",
                  maxWidth: "650px",
                  height: "100%",
                  maxHeight: "740px",
                }}
              />
              <div className="DownloadApp m-5">
                <div className="homepagetext m-0">Get Our App</div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
