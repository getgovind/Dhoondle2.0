import React from "react";
import "./rommmate.css";

const RoomMate = () => {
  return (
    <>
      <section className="rommate_section d-flex align-items-center justify-content-center ">
        <div className="container">
          <div className="row customer_row" >
            <div className="col-md-5 customer_column">
                <div >
              <p className="homepagetext m-0">
                Are you looking for  <span className="homepagetextcolor">Roommates</span>?
              </p>
              {/* <p className="homepagetext m-0">Roommates</p> */}
              <p className="shareroomtext">
                Simple registered on Dhoondle App and Find your favourite rooms
                & PGs
              </p>
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
            </div></div>
            </div>

            <div className="col-md-5 customer_column">
              <img
                src="Assets\Images\header\AdobeStock_269940647-min_30af3e94256ed8cd45100a242992fdbc_2000-550x384.jpeg"
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



export default RoomMate;
