import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import Loader from '../../loader/Loader';
import Footer from '../Footer/Footer';
import FAQ from './FAQ';

export default function FAQMain(){
  useEffect(() => {
    document.title = "FAQs | InvoicePoint"
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
      <FAQ/>
      <Footer/>
      </Fragment>
  )
}
