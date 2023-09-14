import React from "react";
import "./header.css"

const Header = () =>{
    return(
        <header className="header" >
            <nav class="navbar bg-body-tertiary">
  <div class="container">
    <div className="header_outer_cont">
    <a class="navbar-brand"><img src="Assets\Images\header\WhatsApp Image 2023-09-10 at 12.30.14 PM (1).jpeg" alt="" className="img-fluid" style={{ width :"100%", maxWidth:"100px" }} /></a>

    <div className="d-flex gap-3 pt-2 pe-3 ">
    <button className="header_btn" >
       <img src="Assets\Images\header\play-storefordhoondle.png" alt="" style={{ width :"100%",maxWidth :"150px", height:"100%", maxHeight:"40px"  }}  />
        
        </button>
    <button className="header_btn">
    <img src="Assets\Images\header\app-storefordhoondle.png" alt="" /> 
  
     </button>
    </div>
    </div>

  </div>
</nav>

        </header>
    )
}
export default Header;