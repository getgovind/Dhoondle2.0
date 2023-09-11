import React from "react";
import "./customer.css";

const Customer = () => {
    return (
        <>
            <section className="customer_sec" >
                <div className="container">
                    <div className="row customer_row">
                        <div className="col-md-5 customer_column left_column_customer ">
                            <div>
                                <p className="homepagetext m-0" >Are you looking for <span style={{ color :"red" }} >  Rooms & PGs? </span> </p>
                                <p className="shareroomtext">Simple registered on Dhoondle App and view or find your favourite Rooms & PGs.</p>

                                <div className="d-flex gap-3 pt-2 pe-3 ">
                                    <button className="header_btn" >
                                        <img src="Assets\Images\header\play-storefordhoondle.png" alt="" style={{ width: "100%", maxWidth: "150px", height: "100%", maxHeight: "40px" }} />

                                    </button>
                                    <button className="header_btn">
                                        <img src="Assets\Images\header\app-storefordhoondle.png" alt="" />

                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 customer_column ">
                            <div className="customer_img_cont" >
                                <img src="Assets\Images\header\premium-property2roomdhoondle2.0.webp" alt="" className="img-fluid first_img " />
                                <img src="Assets\Images\header\premium-property3dhoondle2.0.webp" alt="" className="img-fluid scnd_img " />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Customer;