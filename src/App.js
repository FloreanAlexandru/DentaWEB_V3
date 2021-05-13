import './App.css';
import React from "react";
import logo from "./images/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import Acasă from "./Home";
import Noutăți from "./News";
import DespreNoi from "./About";
import Medici from "./Medics";
import Servicii from "./Services";
import Contact from "./Contact";
import LogIn from "./LogIn";
import Register from "./Register";
import Profile from "./Profile";
import Appointment from "./Appointment"

import { useTranslation } from 'react-i18next';

function App() {
  const{t, i18n} = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  
  function onClickClear(){
    localStorage.removeItem("data");
  }
  return (
     <header className="main-header">
       <Router>
      
          <nav className="navbar main-navbar">
            <div className="navbar-logo"> <img src={logo} alt=""/> </div>
            <div >
              <Link exact to="/LogIn" onClick={()=>onClickClear()}>
                  <input type="submit" className="btn btn-info" value="Back to Log In"></input>
              </Link>
            </div>
            <ul className="navbar-items">
              <li><Link to="/Home">{t('Acasă.1')} </Link></li>
              <li><Link to="/News"> {t('Noutăți.1')} </Link></li>
              <li><Link to="/About"> {t('Despre noi.1')} </Link></li>
              <li><Link to="/Medics"> {t('Medici.1')} </Link></li>
              <li><Link to="/Services"> {t('Servicii și Tarife.1')} </Link></li>
              <li><Link to="/Contact"> {t('Contact.1')} </Link></li>
            </ul>	
            <div className ="lang-menu">
              <div className="selected-lang">
                <a className="main-lang" onClick={()=>handleClick('ro')}>{t('Română.1')}</a>
                  <ol>
                    <li><a className="en" onClick={()=>handleClick('en')}>{t('Engleză.1')}</a></li>
                    <li><a className="de" onClick={()=>handleClick('de')}>{t('Germană.1')}</a></li>
                  </ol>
              </div>
            </div>
          </nav>
          
          <Switch>
            <Route exact path="/Home">
              <Acasă />
            </Route>
            <Route exact path="/News">
              <Noutăți />
            </Route>
            <Route exact path="/About">
              <DespreNoi />
            </Route>
            <Route exact path="/Medics">
              <Medici />
            </Route>
            <Route exact path="/Services">
              <Servicii />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route> 
            <Route exact path="/LogIn">
              <LogIn/>
            </Route>
            <Route exact path="/Register">
              <Register/>
            </Route>
            <Route exact path="/Profile">
              <Profile/>
            </Route>
            <Route exact path="/Appointment">
              <Appointment/>
            </Route>
          </Switch>
        </Router>
		</header>
  );
}

export default App;
