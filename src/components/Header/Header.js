import React from "react";
import {  Link } from "react-router-dom";
import "./Header.css";
// import HeadLogo from "./home-bg.jpg";

function Header(){

return (

<section id="header">
    <div class="header container">
        <div class="nav-bar">
            <div class="brand">
                {/* <a href="#hero">
                <h1><span>Z</span><span>N</span></h1>
                 </a> */}
            </div>
            <div class="nav-list">
                <div class="hamburger">
                    <div class="bar"></div>
                </div>
                <ul>
                    <li> <Link  to="/" >Home</Link> </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                   
                </ul>
            </div>
        </div>
    </div>
</section>

)

}

export default Header;