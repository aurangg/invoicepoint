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
import PrivacyMain from './Components/PrivacyPolicy/PrivacyMain';
import FAQ from './Components/FAQ/FAQ';
import Terms from './Components/Terms/Terms';

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
                    <Route path="/freelancers" component={FreelancersMain}/>
                    <Route path="/organization" component={OrganizationMain}/>
                    <Route path="/business" component={SmallbusinessMain} />
                    <Route path="/privacypolicy" component={PrivacyMain} />
                    <Route path="/faqs" component={FAQ} />
                    <Route path="/termsofservice" component={Terms} />
                </Switch>
            </Router> 
    )   
}

ReactDOM.render(<App />,document.querySelector('#root'));