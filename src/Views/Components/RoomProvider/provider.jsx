import React from "react";
// import "./hompage.css";

const Provider = () => {
  return (
    <>
      <section className="homepagesection">
        <div className="container">
          <div className="row customer_row" >
            <div className="col-md-5 customer_column">
                <div >
              <p className="homepagetext m-0">
                You are owner of
                  {/* <span className="homepagetextcolor">like-minded</span> */}
              </p>
              <p className="homepagetextcolor m-0">Rooms, Flats & PGs</p>
              <p className="shareroomtext">
                Simple registered on Dhoondle App and upload your Rooms,Flat and PGs Images and Details.
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

export default Provider;
