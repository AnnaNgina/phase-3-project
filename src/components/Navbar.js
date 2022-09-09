import React from "react";
// import "./Navbar.css";
function Navbar() {
    return ( 
      
        <nav id="nav-list">
        <div className="logo">
           <h1><span>Recipe </span>Review</h1>
       </div>
       <div className="nav-bar">
       <li><a href="/">Home</a></li>
       <li><a href="/">Gallery</a></li>
       <li><a href="#footer">About</a></li>
       </div>
   </nav>
);
}

 
 export default Navbar;