import React, { useEffect } from "react";
// import FeaturesBox from "../Common/FeaturesBox";
// import MainHeading from '../Common/MainHeading';
import animationFunction from '../Common/animationFunction';

function FeaturesOrganization(){
        useEffect(() => {
                animationFunction('animation-img')
        })
    return(
        <section className="features sp-90">
                    <div className="container">
                        <div className="row">
                                <div className="col-lg-6 offset-lg-3">
                                        {/* <MainHeading headingName="Focus on Your Clients,Not Your Invoices" /> */}
                                        <h1 className="h-1 h-bold mb-20 text-center">
                                                Focus On Your Clients, <br/> Not  Your Invoices
                                        </h1>
                                </div>
                                <div className="col-lg-4 offset-lg-4">
                                        <p className="paragraph p-adjustment text-left paragraph pt-50">When it comes to running a successful business, keeping your clients happy is a top priority.  That’s why many businesses around the world choose Invoice Point - getting paid is so easy that you have all the time you need to focus on nurturing your clients. With the help of our many useful, easy-to-use app features, we will get you paid fast.</p>
                                        
                                </div>
                        </div>
                       
                        <div className="row sp-60">
                                <div className="col-lg-6">
                                         <img src="/images/one.png" className="animation-img feature-img" alt="fast payment"></img>
                                </div>
                                <div className="col-lg-6 flex-align-items flex-column  ">
                                        <h3 className="h-3 pb-20 pl-10">Know Your <span className="span-color">Business</span> and What it <span className="span-color">Needs</span></h3>
                                        <p className="paragraph w-80 p-adjustment pb-20 pl-10 ">With all your invoices and payments in one place, it’s easy to track your financial progress. Our business reports will offer you valuable insights into how profitable your business is and help you make smart decisions that fit the needs of your business.</p>
                                </div>
                        </div>
                        <div className="row reverse">
                                <div className="col-lg-6">
                                         <img src="/images/two.png" className="animation-img feature-img" alt="fast payment"></img>
                                </div>
                                <div className="col-lg-6 flex-align-items flex-column ">
                                    <div className="p-0-20">
                                        <h3 className="h-3 pb-20 second-feature">Get <span className="span-color">More</span> Work</h3>
                                        <p className="paragraph w-80 pb-20 p-adjustment pr-20 pr-30 second-feature ">Interested in getting more work? Impress potential clients with professional looking estimates. Don’t settle for a simple email. Instead, create estimates that will show you mean business. Once you've caught their interest, secure the job by accepting a deposit upfront</p>
                                    </div>
                                </div>
                        </div>
                        <div className="row ">
                                <div className="col-lg-6">
                                         <img src="/images/three.png" className="animation-img feature-img" alt="invoice sharing"></img>
                                </div>
                                <div className="col-lg-6 flex-align-items flex-column">
                                        <h3 className="h-3 pb-20 pl-10">Customized <span className="span-color">Invoicing</span> </h3>
                                        <div className=""></div>
                                        <p className="paragraph w-80 p-adjustment pb-20 pl-10">Invoice Point will give you all the necessary tools to create personalized invoices that are guaranteed to wow your clients. Customize them in a unique way to represent your business, and show your customers that you always meet the highest standards, even in the smallest of details.</p>
                                </div>
                        </div>
                    </div>
            </section>
    )
}

export default FeaturesOrganization;