import React, {useEffect} from 'react';
import Buttons from '../Common/Buttons';
import Ticks from '../Common/Ticks';
import animationFunction from '../Common/animationFunction';

function Banner(){
    useEffect(() => {
        animationFunction('animation-div')
    })
    return(
        <section className="banner-freelancers sp-60 height-70 flex-center-align flex-column">
        <div className="container">
            <div className="row flex-column-reverse column-reverse flex-lg-row">
                <div className="col-lg-6 animation-div">
                   <h1 className="h-1 h-bold pb-20 res-margin">Invoicing App For <br/><span className="span-color">Freelancers</span> </h1>
                   <p className="paragraph pb-20 p-adjustment">Save Time and Stay Oraganized</p>
                       <Buttons/>
                      <Ticks/>
                 </div>
                <div className="col-lg-6 flex-center-align res-h-40 mobile-only">
                    <img src="/images/freelancers-bg-m.png" className="special-img"></img>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Banner;