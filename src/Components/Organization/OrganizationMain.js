import React, { Fragment, useEffect, useState } from 'react';
import Testimonial from '../Home/Testimonial';
import TryInvoice from '../Home/TryInvoice';
import Trial from '../Home/Trial';
import Banner from '../Organization/Banner';
import FeaturesOrganization from './FeaturesOrganization';
import Footer from '../Footer/Footer';
import Loader from '../../loader/Loader';

function OrganizationMain(){
    useEffect(() => {
        document.title = "Organization | InvoicePoint"
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
                <FeaturesOrganization/>
                <TryInvoice />
                <Testimonial/>
                <Trial/>
                <Footer />
        </Fragment>
    )
}

export default OrganizationMain;