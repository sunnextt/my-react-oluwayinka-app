import React from 'react';
import phone from "./assests/feature-image.png"

function FeaturesPage() {
    return (
        <section className="features-page" >
            <div className="row">
                <div className="page-header">
                    <h5 className="feature-title">FEATURES</h5>
                    <h3>Pwoerful Features As Always</h3>
                </div>
            </div>
            <div className="row service-box">
                <div className="col span-1-of-3">
                    <div className="service-box wow fadeInUp" data-wow-delay="0.2s">
                        <div className="box-icon">
                            <i className="lnr lnr-rocket"></i>
                            <h4>Fast &amp; Powerful</h4>
                            <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</p>
                        </div>
                        <div className="box-icon">
                            <i className="lnr lnr-rocket"></i>
                            <h4>Easily Editable</h4>
                            <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</p>
                        </div>
                        <div className="box-icon">
                            <i className="lnr lnr-rocket"></i>
                            <h4>Cloud Storage</h4>
                            <p>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <div className="col span-1-of-3 feature-image">
                        <figure className="mobile-image">
                            <img src={phone} alt="Feature" />
                        </figure>
                </div>
                <div className="col span-1-of-3">
                    <div className="service-box wow fadeInUp" data-wow-delay="0.2s">
                        <div className="box-icon">
                            <i className="lnr lnr-rocket"></i>
                            <h4>Fast &amp; Powerful</h4>
                            <p>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit.</p>
                        </div>
                        <div className="box-icon">
                            <i className="lnr lnr-rocket"></i>
                            <h4>Easily Editable</h4>
                            <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</p>
                        </div>
                        <div className="box-icon">
                            <i className="lnr lnr-rocket"></i>
                            <h4>Cloud Storage</h4>
                            <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default FeaturesPage