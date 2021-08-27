import React from 'react';
import MainHeading from '../Common/MainHeading';
import PlanBox from '../Common/PlanBox';

export default function Price() {
    return(
        <section className="sp-90">
            <div className="container">
                <div className="row">
                    <MainHeading headingName="Start your free trial today" />
                    <p className=" text-center">Choose the right plan for your business</p>
                    <p className="text-center mb-30"> <span className="h-bold">MONTHLY - YEARLY</span>(switch button to change prices accordingly, prices below are monthly</p>
                <PlanBox/>
                </div>   
            </div>           
        </section>
    )
}