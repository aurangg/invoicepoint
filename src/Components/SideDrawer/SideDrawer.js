import React from 'react';
import {Link} from 'react-router-dom';
import './sidedrawer.css';


const sideDrawer = props => {
    let drawerClasses = ['side-drawer']
    if(props.show){
        drawerClasses = ['side-drawer open']
    }
    // console.log(props)

    return(
        <nav className={drawerClasses} onClick={props.drawerClickHandler}>
            <ul>
                <li>
                    <img src={`${process.env.PUBLIC_URL}/images/main-logo.png`} alt="menu-icon" />
                </li>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/freelancers">
                        Freelancers
                    </Link>
                </li>
                <li>
                    <Link to="/small-business">
                        Small Business
                    </Link>
                </li>
                <li>
                    <Link to="/organization">
                        Organizations
                    </Link>
                </li>
                <li>
                    <Link to="/privacy-policy">
                        Privacy Policy
                    </Link>
                </li>
                <li>
                    <Link to="/faqs">
                        FAQs
                    </Link>
                </li>
                <li>
                    <Link to="/pricing">
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link to="/terms-of-service">
                        Terms & Conditions
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default sideDrawer;