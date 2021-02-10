import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Pages
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Mechanical from "./pages/Mechanical"
import WebApps from "./pages/WebApps"
//Components
import NavbarB from "./components/NavbarB";
import FooterB from "./components/FooterB";
//css
import "./App.css"



function App() {
  return (
    <Router>
      <NavbarB/>
      <Switch>
        <Route path = "/" exact component={Home}/>
        <Route path ="/AboutMe" exact component={AboutMe}/>
        <Route path ="/Mechanical" exact component={Mechanical}/>
        <Route path ="/WebApps" exact component={WebApps}/>
      </Switch>
      <FooterB/>
    </Router>

      
  
    
  );
}

export default App;
