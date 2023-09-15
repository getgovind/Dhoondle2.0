import React from "react";
import "./other.css";
  const marginBottomStyle = {
    marginBottom: "4rem", // Add a margin of 4rem (adjust as needed)
  };
const Otherfacility = () => {
  return (
    <>
      <section className="customer_sec" style={marginBottomStyle}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="homepagetext">Are You looking For?</p>
              <p className="homepagetextcolor">Our Services</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-2 col-4 mb-3 text-center">
              <img
                src="Assets\services\WhatsApp Image 2023-09-06 at 6.11.22 AM.jpeg"
                alt=""
                className="img-fluid equal-height-image"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="col-md-2 col-4 mb-3 text-center">
              <img
                src="Assets\services\WhatsApp_Image_2023-09-06_at_6.13.03_AM-removebg-preview.png"
                alt=""
                className="img-fluid equal-height-image"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="col-md-2 col-4 mb-3 text-center">
              <img
                src="Assets\services\WhatsApp Image 2023-09-06 at 6.15.43 AM.jpeg"
                alt=""
                className="img-fluid equal-height-image"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="col-md-2 col-4 mb-3 text-center">
              <img
                src="Assets\services\WhatsApp_Image_2023-09-06_at_6.17.23_AM-removebg-preview.png"
                alt=""
                className="img-fluid equal-height-image "
                style={{ width: "200px", height: "200px" }}
              />
            </div>
            <div className="col-md-2 col-4 mb-3 text-center">
              <img
                src="Assets\services\WhatsApp_Image_2023-09-06_at_6.22.12_AM-removebg-preview.png"
                alt=""
                className="img-fluid equal-height-image"
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Otherfacility;
