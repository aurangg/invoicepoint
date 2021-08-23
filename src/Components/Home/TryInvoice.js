import React from 'react';
import Buttons from '../Common/Buttons';
import MainHeading from '../Common/MainHeading';


export default function TryInvoice(){
    return(
        <section className="tryInvoice h-450 flex-center-align flex-column">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 flex-center-align flex-column">
                        <h1 className="h-1 fs-50 h-bold mb-10 text-center">
                            Try InvoicePoint
                        </h1>
                    <p className="paragraph p-adjustment pb-50 mb-0 m-center">lorem porem loren poere lorek okeds okeay lorem operem </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <Buttons/>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
        </section>
    )
}