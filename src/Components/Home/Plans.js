import React from 'react';
import MainHeading from '../Common/MainHeading';
import PlanBox from '../Common/PlanBox';


export default function Plans() {
    return(
        <section className="plans sp-90">
                <div className="container flex-column">
                    <div className="row extra-padding">
                        <div className="col-lg-8 offset-lg-2">
                            <MainHeading headingName="Plans" />
                            <p className="paragraph text-center">lorem Lorem ipsum dolor sit amet, consetetur.</p>
                        </div>
                    </div>
                    <div className="row spt-60">
                        <PlanBox />
                    </div>
                </div>
            </section>
    )
}