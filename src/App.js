import React from 'react';
import './App.css';
import ContactMe from "./ContactMe"
import Projects from "./Projects"
import Home from "./Home"
import E404 from './404'
import Unsubscribe from "./Unsubscribe";
import { Route, Switch } from 'react-router-dom';
import Sonali from './Sonali'
import Lobby from './Lobby'

function App(){
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact/> 
        <Route path="/home" component={Home} exact/> 
        <Route path="/index" component={Home} exact/> 
        <Route path="/contact" component={ContactMe} exact/> 
        <Route path="/contactme" component={ContactMe} exact/> 
        <Route path="/projects" component={Projects} exact/>
        <Route path="/project" component={Projects} exact/>
        <Route path="/sonali" component={Sonali} exact/>
        <Route path="/girlfriend" component={Sonali} exact/>
        <Route path="/lobby" component={Lobby} exact/>
        <Route path="/email/unsubscribe/:id" component={Unsubscribe} exact/>
        <Route component={E404} /> 
      </Switch>
    </div>
  )
}

export default App;
