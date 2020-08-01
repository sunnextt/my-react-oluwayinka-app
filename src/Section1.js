import React from 'react'
import logo from './assests/about-logo.png'


function PageInfo() {
    return(
         <div className="row" >
           <div className="page-title text-center">
                <div>
                    <img src={logo} alt="About Logo" />
                   <h5>ABOUT APPLY</h5>
                 </div>
                 <div className="about-us">
                    <h3 >A beautiful app for consectetur adipisicing elit, seddo eiusmod<br /> 
                    tempor incididunt ut mollit anim id est laborum. Sedut <br/>
                    perspiciatisunde omnis. </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor
                       nincididunt ut labore et laborused sed do <br />eiusmod tempor incididunt ut labore et
                       laborused.</p>
                 </div>
           </div>
        </div>
    )
}

export default PageInfo