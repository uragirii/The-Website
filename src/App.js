import React from 'react';
import './App.css';
import { Heading, Button, Para, TextInput, TextArea, ProjectsBar } from "./components/index";
import ContactMe from "./ContactMe"
import Projects from "./Projects"
import Home from "./Home"
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const styles = {
  "section": {
    "height": "100vh",
    "maxHeight": "100vh",

    // "borderBottom": "1px solid #000000",

  },
  "heading" : {
    "fontFamily": "Montserrat",
    "fontStyle": "normal",
    "fontWeight": "bold",
    "fontSize": "36px",
    "lineHeight": "44px",
    "letterSpacing": "0.07em",
    "color": "#000000",
    "textAlign" : "center",
  },
  "caption" : {
    "fontFamily": "Consolas",
    "fontStyle": "normal",
    "fontWeight": "bold",
    "fontSize": "18px",
    "lineHeight": "21px",
    "color": "rgba(0, 0, 0, 0.5)",
    "textAlign" : "center",
    "marginTop" : "3%"
  }
  
}
function App(){
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact/> 
        <Route path="/contact" component={ContactMe} exact/> 
        <Route path="/projects" component={Projects} exact/> 
      </Switch>
    </div>
  )
}

export default App;
