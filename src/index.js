import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HomeMain from './Components/Home/HomeMain';
import FreelancersMain from './Components/Freelancers/FreelancersMain';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import OrganizationMain from './Components/Organization/OrganizationMain';
import SmallbusinessMain from './Components/Business/SmallbusinessMain';
import Toolbar from './Components/Toolbar/Toolbar'
import SideDrawer from './Components/SideDrawer/SideDrawer'
import Backdrop from './Components/BackDrop/Backdrop';
import FAQMain from './Components/FAQ/FAQMain';
import PriceMain from './Components/Pricing/PriceMain';
import TermsMain from './Components/Terms/TermsMain';
import PrivacyMain from './Components/PrivacyPolicy/PrivacyMain';
import Loader from './loader/Loader';
import PageNotFound from './Components/Common/PageNotFound';

const App = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)
    function drawerToggleClickHandler(){
        setSideDrawerOpen(!sideDrawerOpen)
    }
    function backdropClickHandler(){
        setSideDrawerOpen(!sideDrawerOpen)
    }
    let backdrop;

    if(sideDrawerOpen){
        backdrop = <Backdrop click={backdropClickHandler} />
    }
    return(      
            <Router>
                <Toolbar drawerClickHandler={drawerToggleClickHandler} />
                <SideDrawer show={sideDrawerOpen} drawerClickHandler={drawerToggleClickHandler} />
                {backdrop}
                <Switch>
                    <Route path="/" exact component={HomeMain}/>
                    <Route path="/loader" exact component={Loader} />
                    <Route path="/freelancers" exact component={FreelancersMain}/>
                    <Route path="/organization" exact component={OrganizationMain}/>
                    <Route path="/small-business" exact component={SmallbusinessMain} />
                    <Route path="/privacy-policy" exact component={PrivacyMain} />
                    <Route path="/faqs" exact component={FAQMain}  />
                    <Route path="/terms-of-service" exact component={TermsMain} />
                    <Route path="/pricing" exact component={PriceMain} />  
                    <Route  component={PageNotFound} />      
                </Switch>
            </Router> 
    )   
}

ReactDOM.render(<App />,document.querySelector('#root'));