import React from 'react';
import './App.css';
import { Heading, Button, Para, TextInput, TextArea } from "./components/index";


const styles = {
  "section": {
    "height": "100vh",
    "maxHeight": "100vh",

    // "borderBottom": "1px solid #000000",
    "position" : "relative"
  },
  "textInput" : {
    "display":"flex",
    "flexDirection":"column",
    "justifyContent":"space-around",
    "alignItems":"space-around",
    "flex":1
 }
  
}
// TODO: ADD Actual On submit 
function ContactMe() {
  document.title = "Apoorv Kansal | Contact Me"
  return (
    <div className="Contact">
    <div style={styles.section}>
      <div style={{display:'flex'}}>
      <svg width="300" height="100vh" viewBox="0 0 378 1024" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M158.808 229.676C150.155 175.967 192.911 0 192.911 0H0V1024H365.463C365.463 1024 391.422 998.559 365.463 942.023C339.504 885.488 247.374 776.657 231.595 718.001C215.816 659.346 263.662 501.046 247.374 447.337C231.086 393.629 167.461 283.384 158.808 229.676Z" fill="#FF0066" fill-opacity="0.99" stroke="#FF0066"/>
      </svg>
      <div style={{paddingTop:"5%", paddingRight:"5%"}}>
        <div className="fadeIn">
        <Heading label="Contact Me" />
          </div>        
        <Para text="I would love to talk to you and even work for you. I'm currently looking for work. Just fill the form below and I will reply to you in 24 hours."/>
        <div style={{display:'flex', paddingTop:"5%"}}>
          <div style={styles.textInput} className="fadeIn">  
            <TextInput placeholder="Name" val={(v)=>{console.log(v)}} style={{display:'flex', justifyContent:'center'}}/>
            <TextInput placeholder="Email" val={(v)=>{console.log(v)}} type="email" style={{display:'flex', justifyContent:'center'}}/>
          </div>
          <div style={{display:'flex', justifyContent:'center', flex:1}}>
            <TextArea placeholder="Message" val ={(v) => {console.log(v)}} />
          </div>
        </div>
        
        <div style={{display:'flex', justifyContent:'center', paddingTop:"2%"}}>
          <Button type="contained" label="Submit" />
        </div>
        <div style={{display:'flex', justifyContent:'center', color:"#FFFFFF", fontFamily:"Consolas", fontStyle:"italic", fontSize:"0.8em"}}>
          <p>A copy of response will be sent to your Email ID.</p>
        </div>
        <div style={{paddingTop:"5%"}}>
        </div>
      </div>
      </div>
    </div>
    
    </div>
  );
}

export default ContactMe;
