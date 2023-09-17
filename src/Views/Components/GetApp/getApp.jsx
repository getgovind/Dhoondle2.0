import React from "react";
// import "./getApp.css";

const DownloadApp = () => {
  const playStoreUrl = "YOUR_PLAY_STORE_URL_HERE"; // Replace with your Play Store URL

  return (
    <section className="getapppagesection">
      <div className="container">
        <div className="row contentGetApp">
          <div className="col-md-5 customer_column">
            <div className="DownloadApp">
              <h1 className="homepagetext">
                <span className="homepagetextcolor">Connect with us</span> from
                anywhere
              </h1>
              <div className="shareroomtext">
                Download our app from the Play Store OR App Store to get
                started.
              </div>
              <div className="d-flex gap-3 pt-4">
                <a
                  className="header_btn btn btn-sm"
                  // href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="Assets/Images/header/play-storefordhoondle.png"
                    alt="Play Store"
                    className="img-fluid download_by_google_btn"
                  />
                </a>
                <a
                  className="header_btn"
                  // href={appStoreUrl} // Provide the App Store URL
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="Assets/Images/header/app-storefordhoondle.png"
                    alt="App Store"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="mobAppImg">
              <img
                src="Assets/Images/header/mobileApp-removebg-preview.png"
                alt="Mobile App"
                className="img-fluid "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
