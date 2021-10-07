import React from 'react';
import Toggle from '../SideDrawer/Toggle';
import {Link} from 'react-router-dom'
import './toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-navigation">
            <Link to="/">
                <div className="toolbar-logo">
                    <img src={`${process.env.PUBLIC_URL}/images/main-logo.png`} alt="menu-icon" />
                </div>
            </Link>
            <div className="spacer"></div>
            <Toggle click={props.drawerClickHandler} />
            <div className="toolbar-navigation-items">
                <ul>
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
                            Organization
                        </Link>
                    </li>
                    <li>
                        <Link to="/pricing">
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link to="/faqs">
                            FAQs
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar;