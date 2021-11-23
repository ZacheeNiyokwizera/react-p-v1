import React from "react";
import "./Home.css";
import HomePic from "./home-bg.jpg";

function Home(){
    return (
  
        <section id="hero" backgroundColor={HomePic}>
            <div class="hero container">
                <div>
                    <h1>Hello,
                        <span></span></h1>
                    <h1>My Name is <span></span></h1>
                    <h1>Mr Zack <span></span></h1><a type="button" class="cta">Software Developer</a>
                </div>
            </div>
        </section>
   
    )
}

export default Home; 