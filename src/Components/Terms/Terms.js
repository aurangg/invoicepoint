import React from 'react';
import Terms1 from './t1';


export default function Terms(){
    return(
        <section className="sp-90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <h1 className="h-1 h-bold text-left">
                            Invoice Point Terms & Conditions
                        </h1>
                        <p className="paragraph p-adjustment text-left" style={{opacity:"0.7"}}>
                            Last Updated on 2021-02-15
                        </p>
                    </div>
                    <div className="col-lg-6 offset-lg-3 mt-40">
                        <Terms1 />
                    </div>
                </div>
            </div>
        </section>
    )
}