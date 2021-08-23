import React, { Fragment } from 'react';
import Banner from './Banner';
import Benefits from './Benefits';
import OurFeatures from './OurFeatures';
import Plans from './Plans';
import SocialProof from './SocialProof';
import Testimonial from './Testimonial';
import TryInvoice from './TryInvoice';
import Trial from './Trial';
import Footer from '../Footer/Footer';

function HomeMain(){
    return(
        <Fragment>
            <Banner />
            <SocialProof />
            <OurFeatures />
            <TryInvoice />
            <Benefits />
            <Testimonial />
            <Plans />
            <Trial />
            <Footer />
        </Fragment>
    )
}

export default HomeMain;