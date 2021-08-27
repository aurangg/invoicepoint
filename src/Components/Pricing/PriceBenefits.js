import { retry } from 'async';
import React from 'react';
import MainHeading from '../Common/MainHeading';

const benefits= [
    {
        id:0,
        name:"No Risk Policy",
        description:"Start a free 30-day trial today. Cancel anytime & no commitments or costs. ",
        imgURL:"/images/Group 80.png",
    },
    {
        id:1,
        name:"Money Back Gurantee",
        description:"Cancel your plan within 30 days of purchase and receive a full refund.",
        imgURL:"/images/Group 81.png",
    },
    {
        id:2,
        name:"Support",
        description:"Our expert support team is here to help.",
        imgURL:"/images/Group 82.png",
    },
      
]

function PriceBenefits() {
    return(
        <section className="Benefits sp-90">
        <MainHeading headingName="Benefits " />
        <div className="container spt-60">
            <div className="row">
                {benefits.map((i => (
                    <div className="col-lg-4" key={i.id}>
                        <div className="p-30-40 flex-center-align flex-column benefit-box br-5 mb-30">
                            <img src={i.imgURL} className="mb-10" alt="img" />
                            <h3 className="h-3 fw-600 mb-10">
                                {i.name}
                            </h3>
                            <p className="paragraph p-adjustment">
                                {i.description}
                            </p>
                        </div>
                    </div>
                )))}
            </div>
        </div>
    </section>
    )
}

export default PriceBenefits;