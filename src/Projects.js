import React from 'react'
import { Heading, Button, Para, TextInput, TextArea, ProjectsBar } from "./components/index";
import iete from "./assests/IETE.png"
import colors from "./colors"

const styles = {
    "section": {
      "height": "100vh",
      "maxHeight": "100vh",
      "position":"relative"
  
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

function Projects() {
    return (
        <div>
          <div style={styles.section}>
      <div style={{backgroundColor:"#FF0066", }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310" style={{display:"block"}}>
        <path fill="#E5e5e5" fill-opacity="1" d="M0,32L30,26.7C60,21,120,11,180,21.3C240,32,300,64,360,80C420,96,480,96,540,106.7C600,117,660,139,720,160C780,181,840,203,900,213.3C960,224,1020,224,1080,218.7C1140,213,1200,203,1260,176C1320,149,1380,107,1410,85.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg>
        
      </div>
      <div style={styles.heading}>
        📝 My Projects
      </div>
      <div style={styles.caption}>
        Select a category to view projects
      </div>
      <div style={{display:'flex', justifyContent:"center", paddingTop:"3%"}}>
      <span style={{flexShrink:0}}>
                Web Dev
            </span>
            <span style={{flexShrink:0}}>
                App Dev
            </span>
            <span style={{flexShrink:0}}>
                ML / DL
            </span>
            <span style={{flexShrink:0}}>
                Other Things
            </span>
      </div>
      </div>
          <div style={styles.section}>
            <div style={{display:"flex", height:"100vh"}}>
            <div style={{width:"50vw", display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img src={iete}/>              
            </div>
            <div style={{width:"50vw", paddingTop:"12%"}}>
              <div>
              <Heading label="IETE Horizon Website"/>
              <div style={{width:"70%", paddingTop:"5%"}}>
                <Para text="Developed both Front End and Back End of the website for IETE. A portal for registering Symposiums and uploading Research Papers to IETE Horizon"/>
              </div>
              <div style={{width:"70%", paddingTop:"5%"}}>
                <Para text="Equipped with powerful search option a user can also search papers among wide selection of Research Papers. The website is currently being tested in beta mode."/>
              </div>
              </div>
            </div>
            <div style={{position:"absolute", right:0, bottom:"50%", transform:"rotate(-90deg)", fontSize:144, zIndex:0,color:"white", opacity:"0.5" }}>
              Web
            </div>
            </div>
          </div>
          <div style={styles.section}>
            <div style={{display:"flex", height:"100vh"}}>
            <div style={{width:"50vw", paddingTop:"12%"}}>
              <div>
              <Heading label="IETE Horizon Website"/>
              <div style={{width:"70%", paddingTop:"5%"}}>
                <Para text="Developed both Front End and Back End of the website for IETE. A portal for registering Symposiums and uploading Research Papers to IETE Horizon"/>
              </div>
              <div style={{width:"70%", paddingTop:"5%"}}>
                <Para text="Equipped with powerful search option a user can also search papers among wide selection of Research Papers. The website is currently being tested in beta mode."/>
              </div>
              </div>
            </div>
            <div style={{width:"50vw", display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img src={iete}/>              
            </div>
            
            <div style={{position:"absolute", left:0, bottom:"50%", transform:"rotate(-90deg)", fontSize:144, zIndex:0,color:"white", opacity:"0.5" }}>
              App
            </div>
            </div>
          </div>
          <div style={styles.section}>
            <div style={{display:"flex", height:"100vh"}}>
            <div style={{width:"50vw", display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img src={iete}/>              
            </div>
            <div style={{width:"50vw", paddingTop:"12%"}}>
              <div>
              <Heading label="IETE Horizon Website"/>
              <div style={{width:"70%", paddingTop:"5%"}}>
                <Para text="Developed both Front End and Back End of the website for IETE. A portal for registering Symposiums and uploading Research Papers to IETE Horizon"/>
              </div>
              <div style={{width:"70%", paddingTop:"5%"}}>
                <Para text="Equipped with powerful search option a user can also search papers among wide selection of Research Papers. The website is currently being tested in beta mode."/>
              </div>
              </div>
            </div>
            <div style={{position:"absolute", right:0, bottom:"50%", transform:"rotate(-90deg)", fontSize:144, zIndex:0,color:"white", opacity:"0.5" }}>
              Web
            </div>
            </div>
          </div>
          <div style={styles.section}>
            <div style={{display:"flex", height:"100vh"}}>
            <div style={{width:"50vw", display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img src={iete}/>              
            </div>
            <div style={{width:"50vw", paddingTop:"12%"}}>
              <div>
              <Heading label="IETE Horizon Website"/>
              <div style={{width:"70%", paddingTop:"5%"}}>
                <Para text="Developed both Front End and Back End of the website for IETE. A portal for registering Symposiums and uploading Research Papers to IETE Horizon"/>
              </div>
              <div style={{width:"70%", paddingTop:"5%"}}>
                <Para text="Equipped with powerful search option a user can also search papers among wide selection of Research Papers. The website is currently being tested in beta mode."/>
              </div>
              </div>
            </div>
            <div style={{position:"absolute", right:0, bottom:"50%", transform:"rotate(-90deg)", fontSize:144, zIndex:0,color:"white", opacity:"0.5" }}>
              Web
            </div>
            </div>
          </div>
        </div>
    )
}

export default Projects
