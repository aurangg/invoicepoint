import React, { Fragment, useEffect } from 'react';
import animationFunction from '../Common/animationFunction';


function Features(){
        useEffect(() => {
                animationFunction('animation-img')
        })
    return(     
            <section className="features sp-90">
                    <div className="container">
                        <div className="row">
                                <div className="col-lg-6 offset-lg-3">
                                        {/* <MainHeading headingName="Focus on Your Work, Not Your Invoices" /> */}
                                        <h1 className="h-1 h-bold mb-20 text-center">
                                                Focus on Your Work, <br /> Not Your Invoices
                                        </h1>
                                </div>
                                <div className="col-lg-4 offset-lg-4">
                                        <p className="paragraph p-adjustment text-left paragraph pt-50">As a freelancer, your work is always in your hands. Deadlines to meet, clients to speak to, and getting the work done to a high standard - there’s a lot to take care of in a short amount of time. So why spend your valuable time chasing payments?</p>
                                        <p className="paragraph p-adjustment text-left paragraph pt-10">Invoice Point will take the weight off your shoulders and help you manage your payments and invoices in one app.</p>
                                </div>
                        </div>
                      </div>  
                      <div className="container">
                        <div className="row sp-60">
                                <div className="col-lg-6">
                                         <img src="/images/Mask Group 7.png" className="animation-img feature-img" alt="fast payment"></img>
                                </div>
                                <div className="col-lg-6 flex-align-items flex-column  ">
                                        <h3 className="h-3 pb-20 pl-10"><span className="span-color">Fast</span> Payements and <span className="span-color">Easy</span> Invoicing </h3>
                                        <p className="paragraph p-adjustment pb-20 pl-10 ">Professional invoices and plenty of convenient payment options. Get paid faster and let your clients choose their favourite payment method.</p>
                                </div>
                        </div>
                        <div className="row reverse">
                                <div className="col-lg-6">
                                         <img src="/images/Mask Group 6.png" className="animation-img feature-img" alt="fast payment"></img>
                                </div>
                                <div className="col-lg-6 flex-align-items flex-column ">
                                    <div className="p-0-20">
                                        <h3 className="h-3 pb-20 second-feature">Take <span className="span-color">Care</span> of Your Clients</h3>
                                        <p className="paragraph pb-20 p-adjustment pr-20 second-feature">Tracking the status of your invoices and transactions has never been easier. Stay on top of your work, keep clients happy and let Invoice Point take care of the rest for you.</p>
                                    </div>
                                </div>
                        </div>
                        <div className="row ">
                                <div className="col-lg-6">
                                         <img src="/images/Mask Group 8.png" className="animation-img feature-img" alt="invoice sharing"></img>
                                </div>
                                <div className="col-lg-6 flex-align-items flex-column">
                                        <h3 className="h-3 pb-20 pl-10">Invoice Sharing Made <span className="span-color">Simple</span> </h3>
                                        <p className="paragraph p-adjustment pb-20 pl-10">No need to worry about having access to your computer when creating invoices. Just fill in the details, customize, and it’s good to go with the tap of a finger.<br/>Send your invoices via email, text, Facebook messenger, WhatsApp, or other platforms of choice. When it comes to comfort, the Invoice Point app will always have your back.</p>
                                </div>
                        </div>
                    </div>
            </section>           
         )
}

export default Features;