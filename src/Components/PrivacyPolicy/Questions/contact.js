import React from 'react';


export default function Contact(){
    return(
        <div className="question mt-40">
            <h4 className="h-4 h-bold">
                How To Contact Us
            </h4>
            <p className="paragraph p-adjustment text-left">
                If you have any questions or otherwise need to contact us in connection with this Privacy Policy or the Service, please contact us at:
            </p>
            <p className="paragraph p-adjustment text-left">Email:
                <a style={{marginLeft:"10px"}} href={"mailto:{support@invoicepoint.com}"}>support@invoicepoint.com</a>
            </p>
        </div>
    )
}