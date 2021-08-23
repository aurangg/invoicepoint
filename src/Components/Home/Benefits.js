import React, { useEffect } from 'react';
import MainHeading from '../Common/MainHeading';
import animationFunction from '../Common/animationFunction';


const benefitsData = [
    {
        id:0,
        name:"Online Payments",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        imgURL:"/images/Group 80.png",
    },
    {
        id:1,
        name:"Sign Your Invoice",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        imgURL:"/images/Group 81.png",
    },
    {
        id:2,
        name:"Payment Method",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        imgURL:"/images/Group 82.png",
    },
    {
        id:3,
        name:"Subscriptions",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        imgURL:"/images/Group 83.png",
    },
    {
        id:4,
        name:"Time Tracking",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        imgURL:"/images/Group 84.png",
    },
    {
        id:5,
        name:"Heading",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        imgURL:"/images/Group 125.png",
    },
]

export default function Benefits(){
    useEffect(() => {
        animationFunction('benefit-box')
    })
    return(
        <section className="Benefits sp-90">
            <MainHeading headingName="Benefits of using Invoice Point" />
            {/* <h1 className="h-1 h-bold fs-50 mb-20 text-center">
                Benefits of using Invoice Point
            </h1> */}
            <div className="container spt-60">
                <div className="row">
                    {benefitsData.map((i => (
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