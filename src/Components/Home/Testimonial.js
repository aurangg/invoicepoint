import React from 'react';
import MainHeading from '../Common/MainHeading';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

// const PreviousBtn = (props) => {
//     console.log(props);
//     const { className, onClick } = props;
//     return (
//       <div className={className} onClick={onClick}>
//         <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
//       </div>
//     );
//   };
//   const NextBtn = (props) => {
//     const { className, onClick } = props;
//     return (
//       <div className={className} onClick={onClick}>
//         <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
//       </div>
//     );
//   };

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

                <div className="testimonial-slider">
                <Slider 
                // prevArrow={<PreviousBtn />} nextArrow={<NextBtn />}
                dots
                 >
                    <Card/>
                    <Card/>
                    <Card/>
                </Slider>
                </div>
            </div>
        </section>
    );
};

const Card =()=>{
    return(
        <div className="test ">
            <div className="col-lg-8 offset-lg-2 testImg ">
                <div className="mt-30">
                 <img src="/images/Ellipse 4.png  " className="img"></img>
                </div>
                 <p className="test-para mt-30">
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata  "
                 </p>
            </div>  
        </div>
    )
}