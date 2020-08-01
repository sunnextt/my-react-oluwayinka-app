import React from 'react';


function Pricing(){
    return(
        <section className="pricing-phone">
        <div className="row price-plan">
                <h5>PRICING PLAN</h5>
                <p>Our Awesome Pricing Plan</p>
        </div>
        <div className="row">
            <div className="col  span-1-of-3">
                <div className="plan-box">
                <h4>FREE</h4>
                <ul>
                    <li>Easy Installations</li>
                    <li>Unlimited support</li>
                    <li>Uniqe Elements</li>
                </ul>
                   <div className="price-rate">
                      <sup>&#36;</sup> <span class="rate">0</span> <small>/Month</small>
                  </div>
              <div>
                 <button>PURCHASE</button>
             </div>
          </div>
          </div>
            <div className="col  span-1-of-3">
                <div className="plan-box">
                  <h4>MEDIUM</h4>
                <ul>
                    <li>Easy Installations</li>
                    <li>Unlimited support</li>
                    <li>Free Forever</li>
                </ul>
              <div>
                 <div class="price-rate">
                    <sup>&#36;</sup><span className="rate">49</span><small>/Month</small>
                 </div>
                 <button>PURCHASE</button>
             </div>
          </div>
          </div>
            <div className="col  span-1-of-3">
                <div className="plan-box">
                <h4>BUSINESS</h4>
                <ul>
                    <li>Easy Installations</li>
                    <li>Unlimited support</li>
                    <li>Uniqe Elements</li>
                </ul>
                 <div class="price-rate">
                    <sup>&#36;</sup> <span className="rate">99</span><small>/Month</small>
                </div>
              <div>
                 <button>PURCHASE</button>
             </div>
          </div>
          </div>
        </div>
    </section>
    )
}



export default  Pricing



