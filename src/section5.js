import React from 'react';
import team1 from "./assests/team123.jpg"
import team2 from "./assests/team-2.jpg"
import team3 from "./assests/team-3.jpg"
import team4 from "./assests/team-4.jpg"

function Testimonnials() {
    return(
    <section className="testimonials">
        <div className='row'>
          <div className="col-xs-12">
            <div class="page-title text-center">
                <h5 className="title">Testimonials</h5>
                <h3 className="dark-color">Our Client Loves US</h3>
             </div>
          </div>
        </div>
        <div className="row">
        <div className="col span-1-of-4">
        <div className="team-slide">
            <div className="team-box">
                <img src={team1} alt="Ashekur Rahman" />
                <h6 className="position">Art Dirrector</h6>
                 <p><blockquote>Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo!</blockquote></p>
            </div>
          </div>
         </div>
        <div className="col span-1-of-4">
        <div className="team-slide">
            <div className="team-box">
                <img src={team2} alt="Ashekur Rahman" />
                <h6 className="position">Art Dirrector</h6>
                 <p><blockquote>Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo!</blockquote></p>
            </div>
          </div>
         </div>
        <div className="col span-1-of-4">
        <div className="team-slide">
            <div className="team-box">
                <img src={team3} alt="Ashekur Rahman" />
                <h6 className="position">Art Dirrector</h6>
                 <p><blockquote>Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo!</blockquote></p>
            </div>
          </div>
         </div>
        <div className="col span-1-of-4">
        <div className="team-slide">
            <div className="team-box">
                <img src={team4} alt="Ashekur Rahman" />
                <h6 className="position">Art Dirrector</h6>
                 <p><blockquote>Lorem ipsum dolor sit amet, conseg sed do eiusmod temput laborelaborus ed sed do eiusmod tempo!</blockquote></p>
            </div>
          </div>
         </div>
        </div>
    </section>
    )
}


export default Testimonnials