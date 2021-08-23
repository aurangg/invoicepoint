import React, { Fragment, useEffect } from 'react';
import animationFunction from '../Common/animationFunction';
const data = [
    {
        id:0,
        planName: "Lite",
        price:5.99,
        planDescription:"For professionals with basic needs",
        features:[
            {
                id:0,
                img:"/images/Group65.png",
                feature:"50 Invoices"
            },
            {
                id:1,
                img:"/images/cross.svg",
                feature:"Estimates"
            },
            {
                id:2,
                img:"/images/Group65.png",
                feature:"1 User"
            },
            {
                id:3,
                img:"/images/Group65.png",
                feature:"5 Clients"
            },
            {
                id:4,
                img:"/images/Group65.png",
                feature:"Accepts Payments"
            },
            {
                id:5,
                img:"/images/Group65.png",
                feature:"Payment Receipts"
            },
            {
                id:6,
                img:"/images/cross.svg",
                feature:"Time Tracking"
            },
            {
                id:7,
                img:"/images/cross.svg",
                feature:"Invoice Status Tracking"
            },
            {
                id:8,
                img:"/images/cross.svg",
                feature:"Expense Tracking"
            },
            {
                id:9,
                img:"/images/cross.svg",
                feature:"Client Activity"
            },
            {
                id:10,
                img:"/images/cross.svg",
                feature:"Appointments"
            },
            {
                id:11,
                img:"/images/cross.svg",
                feature:"Phone Support"
            },
        ]
    },
    {
        id:1,
        planName: "Standard",
        price:9.99,
        planDescription:"For small business owners looking for more automation and insights",
        features:[
            {
                id:0,
                img:"/images/Group65.png",
                feature:"20 Invoices"
            },
            {
                id:1,
                img:"/images/cross.svg",
                feature:"20 Estimates"
            },
            {
                id:2,
                img:"/images/Group65.png",
                feature:"1 User"
            },
            {
                id:3,
                img:"/images/Group65.png",
                feature:"25 Clients"
            },
            {
                id:4,
                img:"/images/Group65.png",
                feature:"Accepts Payments"
            },
            {
                id:5,
                img:"/images/Group65.png",
                feature:"Payment Receipts"
            },
            {
                id:6,
                img:"/images/Group65.png",
                feature:"Time Tracking"
            },
            {
                id:7,
                img:"/images/Group65.png",
                feature:"Invoice Status Tracking"
            },
            {
                id:8,
                img:"/images/Group65.png",
                feature:"Expense Tracking"
            },
            {
                id:9,
                img:"/images/Group65.png",
                feature:"Client Activity"
            },
            {
                id:10,
                img:"/images/cross.svg",
                feature:"Appointments"
            },
            {
                id:11,
                img:"/images/cross.svg",
                feature:"Phone Support"
            },
        ]
    },
    {
        id:2,
        planName: "Premium",
        price:23.99,
        planDescription:"For business owners with more intricate needs",
        features:[
            {
                id:0,
                img:"/images/Group65.png",
                feature:"40 Invoices"
            },
            {
                id:1,
                img:"/images/cross.svg",
                feature:"40 Estimates"
            },
            {
                id:2,
                img:"/images/Group65.png",
                feature:"2 User"
            },
            {
                id:3,
                img:"/images/Group65.png",
                feature:"100 Clients"
            },
            {
                id:4,
                img:"/images/Group65.png",
                feature:"Accepts Payments"
            },
            {
                id:5,
                img:"/images/Group65.png",
                feature:"Payment Receipts"
            },
            {
                id:6,
                img:"/images/Group65.png",
                feature:"Time Tracking"
            },
            {
                id:7,
                img:"/images/Group65.png",
                feature:"Invoice Status Tracking"
            },
            {
                id:8,
                img:"/images/Group65.png",
                feature:"Expense Tracking"
            },
            {
                id:9,
                img:"/images/Group65.png",
                feature:"Client Activity"
            },
            {
                id:10,
                img:"/images/Group65.png",
                feature:"Appointments"
            },
            {
                id:11,
                img:"/images/cross.svg",
                feature:"Phone Support"
            },
        ]
    },
    {
        id:3,
        planName: "Unlimited",
        price:39.99,
        planDescription:"For large businesses looking for more insights and special features",
        features:[
            {
                id:0,
                img:"/images/Group65.png",
                feature:"Unlimited Invoices"
            },
            {
                id:1,
                img:"/images/cross.svg",
                feature:"Unlimited Estimates"
            },
            {
                id:2,
                img:"/images/Group65.png",
                feature:"5 User"
            },
            {
                id:3,
                img:"/images/Group65.png",
                feature:"Unlimited Clients"
            },
            {
                id:4,
                img:"/images/Group65.png",
                feature:"Accepts Payments"
            },
            {
                id:5,
                img:"/images/Group65.png",
                feature:"Payment Receipts"
            },
            {
                id:6,
                img:"/images/Group65.png",
                feature:"Time Tracking"
            },
            {
                id:7,
                img:"/images/Group65.png",
                feature:"Invoice Status Tracking"
            },
            {
                id:8,
                img:"/images/Group65.png",
                feature:"Expense Tracking"
            },
            {
                id:9,
                img:"/images/Group65.png",
                feature:"Client Activity"
            },
            {
                id:10,
                img:"/images/Group65.png",
                feature:"Appointments"
            },
            {
                id:11,
                img:"/images/Group65.png",
                feature:"Phone Support"
            },
        ]
    },
    
]


function PlanBox(){
    useEffect(() => {
        animationFunction('planBox')
    })
    return(
        <Fragment>
            {data.map((i => (
                <div className="col-lg-3" key={i.id}>
                <div className="planBox mb-20 p-30 br-8">
                        <h6 className="h-6 mb-15 fw-300">
                            {i.planName}
                        </h6>
                        <h3 className="h-3 fw-400 mb-15">
                            ${i.price} <span className="planMonth">/month</span></h3>
                        <p className="planPara">
                            {i.planDescription}
                        </p>
                        {i.features.map((k => {
                            return(
                                <div className="mb-15 flex-simple-center planBox-option" key={k.id}>
                                    <img className="planBox-tick" src={k.img} alt="img" />
                                    <p className="planBox-text ml-10">
                                        {k.feature}
                                    </p>
                                </div>
                            )
                        }))}
                        <div className="flex-center-align flex-column">
                            <button className="planBox-btn br-5 mt-20">Try Now</button>
                        </div>
                </div>
            </div>
            )))}
        </Fragment>
    )
}

export default PlanBox;