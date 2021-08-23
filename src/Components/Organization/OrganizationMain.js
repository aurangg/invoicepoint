import React, { Fragment } from 'react';
import Testimonial from '../Home/Testimonial';
import TryInvoice from '../Home/TryInvoice';
import Trial from '../Home/Trial';
import Banner from '../Organization/Banner';
import FeaturesOrganization from './FeaturesOrganization';
import Footer from '../Footer/Footer';

function OrganizationMain(){
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