import React, {useEffect} from 'react';
import Buttons from '../Common/Buttons';
import Ticks from '../Common/Ticks';
import Lottie from 'react-lottie';
import animationDataOne from '../../animations/animation.json';
import animationFunction from '../Common/animationFunction';

function Banner(){
    const defaultOptions = {
        loop:true,
        autoplay:true,
        animationData:animationDataOne,
        rendererSettings:{
            preserveAspectRation:"xMidYMid slice"
        }
    }
    useEffect(() => {
        animationFunction('animation-div')
    })
    return(
        <section className="home-banner sp-60 height-70 flex-center-align flex-column">
                <div className="container">
                    <div className="row flex-column-reverse column-reverse flex-lg-row">
                        <div className="col-lg-6 animation-div">
                           <h1 className="h-1 h-bold mb-20 res-margin">Control your <span className="span-color">Business</span> <br/>with our invoicing app </h1>
                           <p className="paragraph p-adjustment mb-30 w-80">Invoice Point will balance transactions and client relationships for you, so you can have the time you need to focus on your business.</p>
                                <Buttons/>
                           <p className="paragraph p-adjustment m-30-0">By continuing, you agree to the <span className="span-color">Terms of Services</span> and <br/><span className="span-color">Privacy Policy</span></p>
                          <Ticks/>
                         </div>

                        <div className="col-lg-6 flex-align-center res-h-40">
                                <Lottie options={defaultOptions} height={'auto'} width={'100%'} />
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default Banner;