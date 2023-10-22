import React from "react";
import "./property.css";

const Property = () => {
  return (
    <>
      <section className="homepagesection">
        <div className="container">
          <div className="row customer_row" >
            <div className="col-md-5 customer_column">
                <div >
              <p className="homepagetext m-0">
                Looking for Premium Properties Like? 
              </p>
              <p  className="newhomepagetextcolor">Lands & Plots, Apartments, Godowns, House & Row House   </p>
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
              <div className="property_img_cont" >
            
               <img
                src="Assets\Images\header\HouseimageforWwb.webp"
                alt=""
                className="img-fluid property_img "
              />
                <img
                src="Assets\Images\header\Low-Rise-Apartment-Building-2.jpg"
                alt=""
                className="img-fluid property_img  "
              />
                   <img
                src="Assets\Images\header\land-plot-building-house-aerial-view-land-field-with-pins-pin-location-housing-subdivision-residential-development-owned-sale-rent-buy-investment-home-house-expand-city-suburb_73523-7857.avif"
                alt=""
                className="img-fluid property_img "
              />
                 <img
                src="Assets\Images\header\4d9ea6f9438dc7966fd5650ee5c7131c.jpg"
                alt=""
                className="img-fluid property_img "
              />
            
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};



export default Property;
