import React, { useEffect } from 'react';
import Buttons from '../Common/Buttons';
import Ticks from '../Common/Ticks';
import animationFunction from '../Common/animationFunction';

function Banner(){
    useEffect(() => {
        animationFunction('animation-div')
    })
    return(
        <section className="banner-organization sp-60 height-85 flex-center-align flex-column">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 flex-center-align flex-column flex-align-start flex-initial animation-div">
                           <h1 className="h-1 h-bold pb-20"><span className="span-color">Support</span> The Needs <br/> of Your <span className="span-color">Business</span> </h1>
                           <p className="paragraph p-adjustment pb-20 pr-40">Invoicing App For Organizations</p>
                                <Buttons/>
                                 <Ticks/>
                         </div>

                        <div className="col-lg-6 pt-30">
                            <img className="classic-img" src={`${process.env.PUBLIC_URL}/images/organization-banner.png`} alt="menu-icon" />
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Banner;