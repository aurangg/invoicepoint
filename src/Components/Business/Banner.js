import React, { Fragment, useEffect } from 'react';
import Buttons from '../Common/Buttons';
import Ticks from '../Common/Ticks';
import animationFunction from '../Common/animationFunction';
function Banner(){
    useEffect(() => {
        animationFunction('animation-div')
    })
    return(
        <Fragment>
        <section className="banner-business sp-60 height-80 flex-center-align flex-top flex-column">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 animation-div">
                           <h1 className="h-1 h-bold pb-20">Run Your<span className="span-color"> Business </span><br/>Your <span className="span-color">Way</span> </h1>
                           <p className="paragraph p-adjustment mb-50 w-80">Invoicing App For Small Business Owners</p>
                           <Buttons/>          
                            <Ticks/>
                         </div>

                        <div className="col-lg-6">
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Banner;