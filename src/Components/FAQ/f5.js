import React from 'react';

export default function FAQ5(){
    return(
        <div className="question mt-40">
            <h4 className="h-4 h-bold">
                Didn’t find the answers you were looking for?
            </h4>
            <p className="paragraph p-adjustment text-left">
                Submit a request or contact our team at
                <span>
                    <a style={{marginLeft:"5px"}} href={"mailto:{support@invoicepoint.com}"}>
                        support@invoicepoint.com
                    </a>
                </span>
                !
            </p>
        </div>
    )
}