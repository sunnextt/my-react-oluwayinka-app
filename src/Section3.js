import React from 'react';
import image from '../src/assests/video-image.jpg'
import imgpix from "./assests/play-button.png"

function Padding() {
     return (
         <section>
             <div className="row">
                 <div className="col span-1-of-2 padding-section">
                     <div>
                         <img className="img1" src={image} alt="" />
                         <a href="https://www.youtube.com/watch?v=ScrDhTsX0EQ" className="popup video-button">
                         <img className="img2" src={imgpix} alt="play-button" /></a>
                     </div>
                 </div>
                 <div className="col span-1-of-2 padding-section2">
                         <img src="images/play-button.png" alt="" />
                         <h5 >VIDEO FEATURES</h5>
                         <h3>Grat Application Ever</h3>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do <br />
                          eiusmod  tempor incididunt ut labore et laborused sed do eiusmod <br />
                              tempor incididunt ut labore et laborused.</p>
                         <a className="yourbutton" href="www.google.com" >Learn More</a>
                 </div>
             </div>
         </section>
     )
}



export default Padding