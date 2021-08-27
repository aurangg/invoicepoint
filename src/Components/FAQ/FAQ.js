import React from 'react';
import Footer from '../Footer/Footer';
import FAQ1 from './f1';
import FAQ2 from './f2';
import FAQ3 from './f3';
import FAQ4 from './f4';
import FAQ5 from './f5';


export default function FAQ(){
    return(
        <section className="sp-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <h1 className="h-1 h-bold text-left">
                            Frequently Asked Questions
                        </h1>
                        <div className="mt-40">
                            <FAQ1 />
                            <FAQ2 />
                            <FAQ3 />
                            <FAQ4 />
                            <FAQ5 />                     
                        </div>
                    </div>             
                </div>
            </div>

        </section>
    )
}