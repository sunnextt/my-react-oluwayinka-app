import React from 'react';


function Footer(){
    return(
        <footer className="footer-area" id="contact-page">
                   <div className="row contact">
                     <h5 className="contact-us">Contact US</h5>
                    <h3 className="dark-color">Find Us By Bellow Details</h3>
                 </div>
            <div className="row box-icon">
                <div className="col span-1-of-3 contain-detail">
                    <span className="lnr lnr-map-marker"></span>
                    <p>8-54 Paya Lebar Square <br /> 60 Paya Lebar Roa SG, Singapore</p>
                    <div className="space-30 hidden visible-xs"></div>
                </div>
                <div className="col span-1-of-3 contain-detail">
                    <span className="lnr lnr-map-marker"></span>
                    <p>+65 93901336 <br /> +65 93901337</p>
                    <div className="space-30 hidden visible-xs"></div>
                </div>
                <div className="col span-1-of-3 contain-detail">
                    <span class="lnr lnr-map-marker"></span>
                    <p>samsonoluwayink@gmail.com <br /> cvilla1232@microsoft.com</p>
                    <div className="space-30 hidden visible-xs"></div>
                </div>
            </div>
            <div className="row footer-bottom">
                <div className="col span-1-of-2 copyright">
                   <p>copyright &copy; 2020 by Colorlib. All right reserved.</p>
                </div>
                <div className="col span-1-of-2">
                    <div class="footer-menu">
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#service">Services</a></li>
                            <li><a href="#feacture">Features</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#testimonial">Testimonial</a></li>
                            <li><a href="#contacts">Contacts</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

