import React from 'react';
import './backdrop.css';

function backdrop(props){
    // console.log(props)
    return(
        <div className="backdrop" onClick={props.click}></div>
    )
}

export default backdrop;