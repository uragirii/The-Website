import React from 'react';
import './App.css';
import ContactMe from "./ContactMe"
import Projects from "./Projects"
import Home from "./Home"
import E404 from './404'
import { Route, Switch } from 'react-router-dom';

function App(){
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact/> 
        <Route path="/contact" component={ContactMe} exact/> 
        <Route path="/projects" component={Projects} exact/>
        <Route component={E404} /> 
      </Switch>
    </div>
  )
}

export default App;
