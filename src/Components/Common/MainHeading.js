import React, { useEffect } from 'react';
import animationFunction from '../Common/animationFunction';

function MainHeading(props){
    useEffect(() => {
        animationFunction('animation-text')
    })
    return(
        <h1 className="animation-text h-1 h-bold mb-20 text-center">
            {props.headingName}
        </h1>
    )
}
export default MainHeading;