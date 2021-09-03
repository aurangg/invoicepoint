
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import Loader from '../../loader/Loader';
import Footer from '../Footer/Footer';
import Terms from './Terms';

function TermsMain() {
    useEffect(() => {
        document.title = "Terms & Conditions | InvoicePoint"
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
            <Terms/>
            <Footer/>
        </Fragment>
    )
    
}

export default TermsMain;