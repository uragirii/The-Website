import React from 'react';
import './App.css';
import {Heading} from "./components/Heading/Heading"

import {Button} from "./components/Button/Button"

function App() {
  return (
    <div className="App">
      <div className="section">
        <div className="heading">
          <Heading label = "About Me"/>
        </div>
        <div className="para">
        I’m a 4th year student at Vellore Instutite of Technology, India with 8.66 CGPA. My subject of study is Electronics and Communication Engineering. 
        </div>
        
        <div className="para">
        But my love resides with coding. I’ve always tried to bridge the gap between coding and designing. I have worked on many projects and managed teams. Check out my stack for all the languages I code in and check out my resume for info.
        </div>
        <div style={{marginTop:40, display:"flex"}}>
        <div>
          <Button label="My Stack" type="contained" href="/"/>
          </div>
          <div style={{paddingLeft:50}}>
          <Button label="Resume" type="outlined" href="/"/>
          </div>
        </div>
      </div>
      <div className="section ">
        <div className="heading">
          <Heading label = "About Me"/>
        </div>
        <div className="para">
        I’m a 4th year student at Vellore Instutite of Technology, India with 8.66 CGPA. My subject of study is Electronics and Communication Engineering. 
        </div>
        
        <div className="para">
        But my love resides with coding. I’ve always tried to bridge the gap between coding and designing. I have worked on many projects and managed teams. Check out my stack for all the languages I code in and check out my resume for info.
        </div>
        <div style={{marginTop:40, display:"flex"}}>
        <div>
          <Button label="My Stack" type="contained" href="/"/>
          </div>
          <div style={{paddingLeft:50}}>
          <Button label="Resume" type="outlined" href="/"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
