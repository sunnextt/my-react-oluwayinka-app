import React from 'react';
import Download from "./assests/download-image.png"
import gooolep from "./assests/download-app.svg"
import goooleap from "./assests/download-app-android.png"

function DownloadApp() {
    return(
        <section className="download-app">
        <div className="row">
            <div className="col span-1-of-2">
                <div>
                    <figure>
                        <img src={Download} alt=""/>
                    </figure>
                </div>
            </div>
            <div className="col span-1-of-2 playstore">
                    <div className="playlink">
                        <h1>Download The App</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam possimus eaque magnam
                     eum praesentium unde.</p>
                        <a href="#" className="btn-app"><img src={gooolep} alt="Apple play store" /></a>
                         <a href="#" className="btn-app"><img src={goooleap} alt="Google play store" /></a>
                    </div>
            </div>
        </div>
        </section>
    )
}

export default DownloadApp