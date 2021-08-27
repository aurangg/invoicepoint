import React from 'react';
import { Fragment } from 'react';
import Footer from '../Footer/Footer';
import Trial from '../Home/Trial';
import Price from './Price';
import PriceBenefits from './PriceBenefits';

function  PriceMain() {
    return(
        <Fragment>
            <Price/>
            <PriceBenefits/>
            <Trial/>
            <Footer/>
        </Fragment>
    )
}

export default PriceMain;