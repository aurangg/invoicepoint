import React, { useEffect } from 'react';
import Buttons from '../Common/Buttons';
import Ticks from '../Common/Ticks';
import animationFunction from '../Common/animationFunction';

export default function Trial() {
    useEffect(() => {
        animationFunction('freeimg')
    })
    return(
        <section className="freeTrial sp-90">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-6 mt-90">
                        <h1 className="h_1 h-bold">Get Started For<br/>Free Today</h1>
                        <p className="paragraph p-adjustment">Download the App for Free</p>
                        <Buttons/>              
                        <div className="mt-50">
                        <Ticks/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="/images/Mask Group 10.png"  className="freeimg"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}