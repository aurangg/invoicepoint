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
                    <Link to="/business">
                        Small Business
                    </Link>
                </li>
                <li>
                    <Link to="/organization">
                        Organizations
                    </Link>
                </li>
                <li>
                    <Link to="/privacypolicy">
                        Privacy Policy
                    </Link>
                </li>
                <li>
                    <Link to="/faqs">
                        FAQs
                    </Link>
                </li>
                <li>
                    <Link to="/termsofservice">
                        Terms & Conditions
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default sideDrawer;