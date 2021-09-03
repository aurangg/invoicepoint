import React, { Fragment, useEffect, useState } from 'react';
import Banner from './Banner';
import Features from './Features';
import Testimonial from '../Home/Testimonial';
import Trial from '../Home/Trial';
import TryInvoice from '../Home/TryInvoice';
import Footer from '../Footer/Footer';
import Loader from '../../loader/Loader';


function FreelancersMain(){
    useEffect(() => {
        document.title = "Freelancers | InvoicePoint"
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
            
            <Banner />
            <Features />
            <TryInvoice/>
            <Testimonial/>
            <Trial/>
            <Footer />
        </Fragment>
    )
}

export default FreelancersMain;