import React from "react";
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
                    <li><a href="#hero" data-after="Home">Home</a></li>
                    <li><a href="#about" data-after="About">About</a></li>

                    <li><a href="#contactForm" data-after="Contact">Contact</a></li>
                    <li><a href="#footer" data-after="footer">Get in touch</a></li>
                </ul>
            </div>
        </div>
    </div>
</section>

)

}

export default Header;