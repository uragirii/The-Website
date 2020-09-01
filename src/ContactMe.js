import React, {useState} from 'react';
import './App.css';
import { Heading, Button, Para, TextInput, TextArea, Loader } from "./components/index";


const styles = {
  "section": {
    "height": "100vh",
    "maxHeight": "100vh",
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
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [message, setMessage] = useState(null)
  const [err, setErr] = useState(null)
  const [status, setStatus] = useState("FORM")
  document.title = "Apoorv Kansal | Contact Me"
  const POSTURL = "https://us-central1-the-website-ak.cloudfunctions.net/api/contact"

  const checkAndSend = ()=>{
    // TODO: Check if email is correct or not
    // TODO: Add animations 
    if(name && email && message){
      setStatus("LOADING")
      fetch(POSTURL,{
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({name, email, message})
      })
      .then(res=>{
        if(res.status!==200){
          console.log("No status")
          throw 'Err'
        }
        return res.json()})
        .then(res=>{
        const data = res
        if(!data.err){
          setStatus("EMAILSENT")
        }
        else if(data.err && data.err === "Email Blacklisted"){
          setStatus("ERRBLACK")
        }
        else{
          setStatus("ERR")
        }
      })
      .catch(err=>{
        setStatus("ERR")
      })
    }
    else{
      setErr("Please fill all the blanks")
    }

  }

  const form = (
    <div>
      <div style={{display:'flex', paddingTop:"5%"}}>
      <div style={styles.textInput} className="fadeIn">  
        <TextInput placeholder="Name" val={(v)=>{setName(v)}} style={{display:'flex', justifyContent:'center'}}/>
        <TextInput placeholder="Email" val={(v)=>{setEmail(v)}} type="email" style={{display:'flex', justifyContent:'center'}}/>
      </div>
      <div style={{display:'flex', justifyContent:'center', flex:1}}>
        <TextArea placeholder="Message" val ={(v) => {setMessage(v)}} />
      </div>
    </div>
    <div style={{display:'flex', justifyContent:'center', paddingTop:"2%"}}>
      <Button type="contained" label="Submit" onClick={checkAndSend}/>
    </div>
    <div style={{display:'flex', justifyContent:'center', color:"red", fontFamily:"Consolas", fontStyle:"italic", fontSize:"0.8em"}}>
      <p>{err}</p>
    </div>
    <div style={{display:'flex', justifyContent:'center', color:"#FFFFFF", fontFamily:"Consolas", fontStyle:"italic", fontSize:"0.8em"}}>
      <p>A copy of the response will be sent to your Email ID.</p>
    </div>
    </div>
  )
  const waitForEmail = (
    <div style={{display:"flex", paddingTop:"5%", justifyContent:"center", alignItems:"center", flexDirection:'column'}}>
        <Loader />
        <div style={{display:'flex', justifyContent:'center', color:"#FFFFFF", fontFamily:"Consolas", fontStyle:"italic", fontSize:"0.8em", paddingTop:10}}>
          <p>Please wait, while email is being sent.</p>
        </div>
    </div>
  )
  const EmailSent = (
    <div style={{display:"flex", paddingTop:"5%", justifyContent:"center", alignItems:"center", flexDirection:'column'}}>
        <div style={{display:'flex', justifyContent:'center', color:"#FFFFFF", fontFamily:"Consolas", fontStyle:"italic", fontSize:"0.8em", paddingTop:10}}>
          <p>Email Sent successfully. You may need to check your spam folder. I will contact you soon. Thanks</p>
        </div>
    </div>
  )

  const emailBlackList = (
    <div style={{display:"flex", paddingTop:"5%", justifyContent:"center", alignItems:"center", flexDirection:'column'}}>
        <div style={{display:'flex', justifyContent:'center', color:"#FFFFFF", fontFamily:"Consolas", fontStyle:"italic", fontSize:"0.8em", paddingTop:10}}>
          <p>Your email address is blacklisted. This action could not be completed.</p>
        </div>
    </div>
  )
  const emailErr = (
    <div style={{display:"flex", paddingTop:"5%", justifyContent:"center", alignItems:"center", flexDirection:'column'}}>
        <div style={{display:'flex', justifyContent:'center', color:"#FFFFFF", fontFamily:"Consolas", fontStyle:"italic", fontSize:"0.8em", paddingTop:10}}>
          <p>There was a problem. This action could not be completed.</p>
        </div>
    </div>
  )
  let final
  if(status === "FORM"){
    final = form
  }
  else if(status === "LOADING"){
    final = waitForEmail
  }
  else if(status === "EMAILSENT"){
    final = EmailSent
  }
  else if(status === "ERRBLACK"){
    final = emailBlackList
  }
  else if(status === "ERR"){
    final = emailErr
  }


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
        {final}
      </div>
      </div>
    </div>
    </div>
  );
}

export default ContactMe;
