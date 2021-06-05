// I started writing About page with Style.css.
// I ran nmp start but it failed to complied so I cant go further withouth
// seeing its output. However, I spent more than three hours

import React from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import './About.css';

import explorers from "../img/About.img/explorers.jpg";
import cliff from "../img/About-img/cliff.jpg";
import concert from "../img/About-img/concert.jpg";
import downhill from "../img/About-img/downhill.jpg";
import eatout from "../img/About.img/eatout.jpg ";
import legShot from "../img/About-img/legShot.jpg";
import nightout from "../img/About-img/nightout.jpg";
import snowday from "../img/About-img/snowday.jpg";



const About = () => {
    return (
        <div className="container">

            <div className="About-images" id="about-img">
               <img className="bg-about-img" id="A" alt='' src= { explorers } />
               <img className="bg-about-img" id="B" alt='' src= { cliff } />
               <img className="bg-about-img" id="C" alt='' src= { concert } />
               <img className="bg-about-img" id="D" alt='' src= { downhill } />
               <img className="bg-about-img" id="E" alt='' src= { eatout } />
               <img className="bg-about-img" id="F" alt='' src= { legShot } />
               <img className="bg-about-img" id="G" alt='' src= { nightout } />
               <img className="bg-about-img" id="H" alt='' src= { snowday } /> 
            </div>
            
                <div className="About-bg-text">
                  <h4 className="center" id="aboutTitle">About</h4>
                     <p> We love Cincinnati and want to share the best of our city's offerings with you. We live, work and play here. Our mission is connecting you to the sights, sounds,adventures and events of our city. We want you and your families to enjoy the finest of what Cincinnati has to offer.We’d love to connect with you on social media. Share your experience with us! Join our newsletter community, called Club Cincinnati for discounts, coupons and special offers. Thank you for visiting our city, and we hope you enjoy your visit.</p>
                </div>
                     
        </div>
    )
};
export default About;