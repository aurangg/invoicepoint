import React, { Fragment } from 'react';
// import { Row } from 'react-bootstrap';


const data =[
    {
        id:0,
        heading:"Fast Payment and Easy Invoicing",
        paragraph:"Tracking the status of your invoices and transactions has never been easier. Stay on top of your work, keep clients happy and let Invoice Point take care of the rest for you.",
        imgURL:"/images/Mask Group 10.png",
        alt:"payment Method",
        // flexdirection: row,
    },
    {
        id:1,
        heading:"Take Care of Your Clients",
        paragraph:"Professional invoices and plenty of convenient payment options. Get paid faster and let your clients choose their favorite payment method.",
        imgURL:"/images/Mask Group 10.png",
        alt:"payment Method",
        // flexdirection:row-reverse,  
    }
]

function FeaturesBox(){
    return(
       <Fragment>
            {data.map((i =>(
                <Fragment>
                <div className="col-lg-6" key={i.id}>
                        <img src={i.imgURL} alt="i.alt"></img>
              </div>
       <div className="col-lg-6 flex-align-items flex-column  ">
               <h3 className="h-3 pb-20 pl-10">{i.heading}</h3>
               <p className="paragraph pb-20 pl-10 ">{i.paragraph}</p>
       </div>
       </Fragment>
            )))}
       </Fragment>
    )
}
export default FeaturesBox;