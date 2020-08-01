import React from 'react';

function Gallery(){
    return(
        <section  phone-feature>
            <div className="row">
                <div className="col span-1-of-2 phone-value" >
                    <div>
                        <h5>OUR FEATURES</h5>
                        <h3>Aour Approach of Design is Prety Simple and Clear</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor 
                        incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore
                         et laborused.</p>
                        <div className='learn'><button className="btn btn-full">LEARN MORE</button></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col span-1-of-2 phone-notification">
                        <h3>Easy Notifications</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>

                        <h3>Fully Responsive</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>

                        <h3>Editable Layout</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
            </div>
        </section>
        
    )
}


export default Gallery