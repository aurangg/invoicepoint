import React, { Fragment, useEffect, useState } from 'react';
import Banner from '../Business/Banner';
import Testimonial from '../Home/Testimonial';
import TryInvoice from '../Home/TryInvoice';
import Trial from '../Home/Trial';
import FeatureBusiness from './FeaturesBusiness';
import Footer from '../Footer/Footer';
import Loader from '../../loader/Loader';


function SmallbusinessMain(){
    useEffect(() => {
        document.title = "Small Business | InvoicePoint"
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
                <Banner/>
                <FeatureBusiness/>
                <TryInvoice/>
                <Testimonial/>
                <Trial/>
                <Footer />
        </Fragment>
    )
}

export default SmallbusinessMain;