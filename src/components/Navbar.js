import React from "react";
// import "./Navbar.css";
import fire from "./images/fire.jpg";
function Navbar() {
    return ( 
      
      <div className="header">
         <h1>Crime Report System</h1>
         
             <div id="links">
             <a href="#home">Home</a> 
            <a href="#reportcase">Report Case</a>
            <a href="#comment">Comment</a>
             
             </div>
             <div className="charts">
            
            
            <img src={fire} alt='fire report' height={39}/>
        </div>
        </div>
 );

}
 export default Navbar;