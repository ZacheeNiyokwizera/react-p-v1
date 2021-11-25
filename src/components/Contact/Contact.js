import React from "react";
import "./Contact.css";
// import HeadLogo from "./home-bg.jpg";

function Contact(){

return (

<section class="contact" id="contactForm">
        <h1 class="contact-heading ">Contact Me</h1>
        <form class="contact-form center">
            <div class="input-group"><label>Full Name *</label><input type="text" id="myName" class="contact-input" placeholder="Enter Your Name" required/></div>
            <div class="input-groups ">
                <div class="input-group"><label>Email *</label><input type="email" id="myEmail" class="contact-input" placeholder="Enter Your Email" required /></div>
                <div class="input-group "><label>Phone</label><input type="text" id="myPhone" class="contact-input " placeholder="Enter Phone Number" required/></div>
            </div>
            <div class="input-group "><label>Message</label><textarea id="myMessage" class="form-textarea" placeholder="Your Message Here... " required></textarea>
            </div><button id="clearIt" type="submit" class="form-btn">Submit</button>
            <div class="alert">
                <h2>Your message has been sent</h2>
            </div>
        </form>
    </section>
)

}

export default Contact;