import React from 'react';

function Subscribe(){
    return(
        <div className="subscribe-area">
            <div className="contain">
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-sm-offset-2">
                        <div className="subscribe-form text-center">
                            <h3 className="blue-color">Subscribe for More Features</h3>
                            <div className="space-20"></div>         
                            <form id="mc-form">           
                             <input type="email" className="control" placeholder="Enter your email" required="required" id="mc-email" />
                            <button class="bttn-white active" type="submit"><span class="lnr lnr-location"></span> Subscribe</button>
                             <label class="mt10" for="mc-email"></label>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe