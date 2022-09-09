import React from "react";
// import "./Navbar.css";
function Navbar() {
    return ( 
      
      <div className="header">
         <h1>Crime Report System</h1>
        
         
             <div id="links">
             <a href="#home">Home</a> 
            <a href="#reportcase">Report Case</a>
            <a href="#comment">Comment</a>
             </div>
             <img src="./images/fire.jpg" alt="fire"></img>
        </div>
 );

}
 export default Navbar;