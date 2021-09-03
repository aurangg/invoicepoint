import React, { useEffect, useState } from 'react';
import Question1 from './Questions/q1';
import Question2 from './Questions/q2';
import Question3 from './Questions/q3';
import Question4 from './Questions/q4';
import Question5 from './Questions/q5';
import Question6 from './Questions/q6';
import Question7 from './Questions/q7';
import Question8 from './Questions/q8';
import Question9 from './Questions/q9';
import Question10 from './Questions/q10';
import Question11 from './Questions/q11';
import Question12 from './Questions/q12';
import Question13 from './Questions/q13';
import Question14 from './Questions/q14';
import Question20 from './Questions/q20';
import Question21 from './Questions/q21';
import Question22 from './Questions/q22';
import Contact from './Questions/contact';
import { Fragment } from 'react';
import Footer from '../Footer/Footer';
import Loader from '../../loader/Loader';

function PrivacyMain(){
    console.log("inside")
    useEffect(() => {
        document.title = "Privacy Policy | InvoicePoint"
   }, []);
   const[loader, SetLoader] = useState(false)
    useEffect(() =>
    setTimeout(() =>{
        SetLoader(true)
    },1500)[loader]  
    )
    if (!loader) {
        return <Loader/>;
    }
    return(
        <Fragment>
            <section className="sp-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <h1 className="h-1 h-bold text-left">
                            Invoice Point Privacy Policy
                        </h1>
                        <p className="paragraph p-adjustment text-left" style={{opacity:"0.7"}}>
                            Last Updated on 2021-02-15
                        </p>
                    </div>
                    <div className="col-lg-6 offset-lg-3">
                        <div className="mt-40">
                            <p className="paragraph p-adjustment text-left">
                                Invoice Point (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, protected, and disclosed by Invoice Point.
                            </p>
                        </div>
                        <p className="paragraph p-adjustment text-left">
                            This Privacy Policy applies to our website, and its associated subdomains (collectively, our “Service”) alongside our application, Invoice Point. By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
                        </p>
                        <Question1 />
                        <Question2 />
                        <Question3 />
                        <Question4 />
                        <Question5 />
                        <Question6 />
                        <Question7 />
                        <Question8 />
                        <Question9 />
                        <Question10 />
                        <Question11 />
                        <Question12 />
                        <Question13 />
                        <Question14 />
                        <Question20 />
                        <Question21 />
                        <Question22 />
                        <Contact />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </Fragment>
    )
}
export default PrivacyMain;