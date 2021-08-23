import React, {useEffect} from 'react';
import animationFunction from '../Common/animationFunction'
const socialProof = [
    {
        id:0,
        imgURL:"/images/Icon awesome-paypal.png",
        alt:"paypal"
    },
    {
        id:1,
        imgURL:"/images/Icon awesome-stripe.png",
        alt:"stripe"
    },
  
]

const socialProoftwo = [
    {
        id:0,
        imgURL:"/images/Icon simple-xero.png",
        alt:"xero"
    },
    {
        id:1,
        imgURL:"/images/Icon awesome-apple-pay.png",
        alt:"apple-pay"
    },
]

export default function SocialProof(){
    useEffect(() => {
        animationFunction('box')
    },[])
    return(
        <section className="paymentMethod sp-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 flex-end">
                            <div className="row">
                                {socialProof.map((i => (
                                        <div className="col-6 flex-center-align pt-20" key={i.id}>
                                            
                                            <div className="box flex-center-align">
                                                <img src={i.imgURL} alt={i.alt} />
                                            </div>
                                            
                                        </div>
                                )))}
                            </div>
                        </div> 
                    <div className="col-lg-6 flex-start">
                        <div className="row">
                            {socialProoftwo.map((i => (
                                    <div className="col-6 flex-center-align pt-20" key={i.id}>
                                        
                                        <div className=" box flex-center-align">
                                            <img src={i.imgURL} alt={i.alt} />
                                        </div>
                                        
                                    </div>
                            )))}
                        </div>
                    </div>                                     
                        </div>
                    </div>          
            </section>
    )
}