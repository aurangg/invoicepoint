import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import Loader from '../../loader/Loader';
import Footer from '../Footer/Footer';
import Trial from '../Home/Trial';
import Price from './Price';
import PriceBenefits from './PriceBenefits';

function  PriceMain() {
    useEffect(() => {
        document.title = "Pricing | InvoicePoint"
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
            <Price/>
            <PriceBenefits/>
            <Trial/>
            <Footer/>
        </Fragment>
    )
}

export default PriceMain;