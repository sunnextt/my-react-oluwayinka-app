import React from 'react';
import imagesprogress from "./assests/progress-phone.png"

function PageProgress() {
    return(
        <section className="page-progresion">
            <div className="row page-progress">
                <div className="col span-1-of-2 sectn">
                    <div>
                        <h5>Our Progress</h5>
                        <h3>Grat Application Ever</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</p>
                        <a className="myButton" href="https://colorlib.com/preview/theme/appy/#">Learn More</a>
                    </div>
                    <div></div>
                </div>
                <div className="col span-1-of-2">
                    <figure>
                        <img src={imagesprogress} alt="" />
                    </figure>
                </div>
            </div>
        </section>

    )
}



export default PageProgress