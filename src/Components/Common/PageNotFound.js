import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

function PageNotFound (){
    return(
        <Fragment>
        <div className="container">
        <div className="row">
            <div className="col-lg-4 offset-lg-4 flex-center-align">
            <div className="404-page mt-30">
                <img src="/images/404.png" alt="404image"  style={{height:"100%", width:"100%"}} /> 
                
        </div>
            </div>
        </div>
        <Link to="/" style={{textDecoration:"none"}}>
            <div className="link-tag flex-align-items mb-30">
                <button className="l-btn">Back to Home Page</button>
            </div>
        </Link>
        </div>
        <Footer/>
        </Fragment>
        
    )
}

export default PageNotFound;