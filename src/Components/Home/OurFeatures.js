import React, { useEffect } from 'react';
import MainHeading from '../Common/MainHeading';
import animationFunction from '../Common/animationFunction';

export default function OurFeatures(){
    useEffect(() => {
        animationFunction('animation-img')
    })
    return(
        <section className="features sp-90">
                {/* <h1 className="h-1 h-bold text-center">Our Features Support Your Business</h1> */}
                <MainHeading headingName="Our Features Support Your Business" />
                <div className="container sp-60">
                    <div className="row m-margin">
                        <div className="col-lg-6 flex-align-items">
                            <img src="/images/Group10.png" className="animation-img feature-img"/>
                        </div>
                        <div className="col-lg-6 flex-align-items flex-column  ">
                            <h3 className="h-3 mb-25 feature-heading pl-10">Getting <span className="span-color">Paid</span> Made Easy</h3>
                            <p className="paragraph w-80 p-adjustment mb-25 pl-10">Create, customize, and send professional looking invoices in mere seconds. Send your invoice straight after the job is done and get paid faster!</p>
                            <div className="pl-10">
                            <button className="l-btn br-8 mt-10">Learn More</button>
                            </div>                           
                        </div>
                    </div>
                    <div className="row m-margin reverse">
                        <div className="col-lg-6 flex-align-items">
                            <img src="/images/Group11.png" className="animation-img feature-img"></img>
                        </div>
                        <div className="col-lg-6 flex-align-items flex-column  ">
                            <h3 className="h-3 mb-20 feature-heading">App That <span className="span-color">Saves</span> Your Time</h3>
                            <p className="paragraph w-80 p-adjustment mb-25">We make invoicing on the go so easy, you’ll be surprised how much valuable time you’ll have to focus on doing what you love. After all, time is of the essence when it comes to running a successful business.</p>
                            <div className="">
                            <button className="l-btn br-8 mt-10">Learn More</button>
                            </div>                           
                        </div>
                    </div>
                    <div className="row m-margin">
                        <div className="col-lg-6 flex-align-items">
                            <img src="/images/Group12.png" className="animation-img feature-img"></img>
                        </div>
                        <div className="col-lg-6 flex-align-items flex-column  ">
                            <h3 className="h-3 mb-20 pl-10 feature-heading"><span className="span-color">Convenient</span> Payment Method</h3>
                            <p className="paragraph w-80 p-adjustment mb-20 pl-10">No more waiting in line at the bank to get paid.Send your invoices with instant payment options, including PayPal, credit card, or debit card. It’s secure, fast, and easy. Your clients will be impressed by the convenience of your services!</p>
                            <div className="pl-10">
                            <button className="l-btn br-8 mt-10">Learn More</button>
                            </div>                           
                        </div>
                    </div>
                    <div className="row m-margin reverse">
                        <div className="col-lg-6 flex-align-items">
                            <img src="/images/Group13.png" className="animation-img feature-img"></img>
                        </div>
                        <div className="col-lg-6 flex-align-items flex-column  ">
                            <h3 className="h-3 mb-20 feature-heading"><span className="span-color">Automate</span> Your Business</h3>
                            <p className="paragraph w-80 p-adjustment mb-20">No need to chase clients for overdue payments. Take advantage of the opportunity to focus your time on what matters most and enjoy the freedom that only automation can offer.
                            Payments are recorded and invoice status updated automatically in your account. Set up reminders to notify your clients about overdue or upcoming payments. Let us take care of the rest.
                            </p>
                            <div className="">
                            <button className="l-btn br-8 mt-10">Learn More</button>
                            </div>                           
                        </div>
                    </div>
                    <div className="row m-margin">
                        <div className="col-lg-6 flex-align-items">
                            <img src="/images/Group14.png" className="animation-img feature-img"></img>
                        </div>
                        <div className="col-lg-6 flex-align-items flex-column  ">
                            <h3 className="h-3 mb-20 pl-10 feature-heading"><span className="span-color">Instantly</span> Check How Your <br/> Business is Performing</h3>
                            <p className="paragraph mb-20 pl-10 w-80 p-adjustment">No more waiting in line at the bank to get paid. Send your invoices with instant payment options, including PayPal, credit card, or debit card. It’s secure, fast, and easy. Your clients will be impressed by the convenience of your services!</p>
                            <div className="pl-10">
                            <button className="l-btn br-8 mt-10">Learn More</button>
                            </div>                           
                        </div>
                    </div>
                </div>
            </section>
    )
}