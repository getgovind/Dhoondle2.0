import React from "react";
import "./provider.css";
 
  const Provider = () => {
    return (
      <>
        <section className=" provider_section  mb-4">
          <div className="container">
            <div className="row customer_row">
              <div className="col-md-5 customer_column mb-4 mb-md-0">
                <div>
                  <span className="homepagetext m-0  ">
                    You are the owner of &nbsp;
                  </span>
                  <span className="newhomepagetextcolor m-0">Rooms, Flats & PGs, Plots, Apartment, House & Row House  </span>

                  <p className="shareroomtext">
                    Simply register on the Dhoondle App and upload your room,
                    flat, and PG images and details.
                  </p>
                  <div className="d-flex gap-3 pt-2 pe-3">
                    <button className="btn btn-sm header_btn">
                      <img
                        src="Assets\Images\header\play-storefordhoondle.png"
                        alt=""
                        style={{
                          width: "100%",
                          maxWidth: "150px",
                          height: "auto",
                        }}
                      />
                    </button>
                    <button className="btn btn-sm header_btn">
                      <img
                        src="Assets\Images\header\app-storefordhoondle.png"
                        alt=""
                        style={{
                          width: "100%",
                          maxWidth: "150px",
                          height: "auto",
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-5 customer_column">
                <img
                  src="Assets\Images\header\realtor-assistance_23-2148672112.jpg"
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
