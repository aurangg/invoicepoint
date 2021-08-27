import React from 'react';
import MainHeading from '../Common/MainHeading';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Testimonial(props){
    return(
        <section className="Testimonial sp-90"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <MainHeading headingName="Freelancers,small businesses and independent contractors love Invoive Point" />
                        <p className="paragraph text-center">lorem Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
                    </div>
                </div>

                <Slider>
                    <Card/>
                    <Card/>
                    <Card/>
                </Slider>


                {/* <div className="test mt-90">
                    <img src="/images/Ellipse 4.png" className="testImg"></img>
                </div> */}

            </div>
        </section>
    );
};

const Card =()=>{
    return(
        <div className="test">
            <div className="col-lg-8 offset-lg-2 testImg">
                <div className="mt-30">
                 <img src="/images/Ellipse 4.png" ></img>
                </div>
                 <p className="test-para mt-30">"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata"</p>
            </div>  
        </div>
    )
}