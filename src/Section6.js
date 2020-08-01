
import React from 'react';

import imageo1 from "./assests/gallery-1.jpg"
import imageo2 from "./assests/gallery-2.jpg"
import imageo3 from "./assests/gallery-3.jpg"
import imageo4 from "./assests/gallery-4.jpg"


function Screenshot() {
    return (
            <section className="section-padding" id="gallery_page">
                <div className="container-fluid">
                <div className="row">
                    <div className="col span-1-of-2 gallery-slider">
                        <div className="gallery-slide">
                            <img src={imageo1} alt="" />
                            <img src={imageo2} alt="" />
                            {/* <img src={imageo3} alt="" />
                            <img src={imageo4} alt="" />
                            <img src={imageo3} alt="" />
                            <img src={imageo2} alt="" />
                            <img src={imageo1} alt="" />
                            <img src={imageo4} alt="" />
                            <img src={imageo3} alt="" />
                            <img src={imageo2} alt="" />
                            <img src={imageo1} alt="" />
                            <img src={imageo2} alt="" />
                            <img src={imageo3} alt="" /> */}
                        </div>
                    </div>
                <div className="col span-1-of-2 gallery-slider">
                <div className="gallery-slide slider-word">
                    <div className="col-xs-12 col-sm-5 col-lg-3">
                        <h5 className="white-color title wow fadeInUp" data-wow-delay="0.2s">Screenshots</h5>
                        <h3 className="white-color wow fadeInUp" data-wow-delay="0.4s">Screenshot 01</h3>
                    </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</p>
                        <a href="www.google.com" className="yourbutton" data-wow-delay="0.8s">Learn More</a>
                  </div>
               </div>
             </div>
            </div>
        </section>
    )
}


export default Screenshot