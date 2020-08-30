import React from 'react'
import { Heading, Button, Para, TextInput, TextArea, ProjectsBar } from "./components/index";
import iete from "./assests/IETE.png"
import colors from "./colors"
import projectsDetails from './projectsDetails'

import ProjectCrousel from "./components/ProjectCrousel"

const styles = {
    "section": {
      "height": "100vh",
      "maxHeight": "100vh",
      "position":"relative"
    },
    "heading" : {
      "fontFamily": "Montserrat",
      "fontStyle": "normal",
      "fontWeight": "bold",
      "fontSize": "36px",
      "lineHeight": "44px",
      "letterSpacing": "0.07em",
      "color": colors.primary.text,
      "textAlign" : "center",
    },
    "caption" : {
      "fontFamily": "Consolas",
      "fontStyle": "normal",
      "fontWeight": "bold",
      "fontSize": "18px",
      "lineHeight": "21px",
      "color": colors.secondary.text,
      "textAlign" : "center",
      "marginTop" : "3%"
    }
    
}


function Projects() {
  projectsDetails['projects']["web"]['images'].push(iete)
  projectsDetails['projects']["app"]['images'].push(iete)

  document.title = "Apoorv Kansal | Projects"
    return (
        <div>
          <div style={styles.section}>
      <div style={{backgroundColor:colors.secondary.background, }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310" style={{display:"block"}}>
        <path fill={colors.primary.background} fill-opacity="1" d="M0,32L30,26.7C60,21,120,11,180,21.3C240,32,300,64,360,80C420,96,480,96,540,106.7C600,117,660,139,720,160C780,181,840,203,900,213.3C960,224,1020,224,1080,218.7C1140,213,1200,203,1260,176C1320,149,1380,107,1410,85.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg>
        
      </div>
      <div style={styles.heading}>
        📝 My Projects
      </div>
      <div style={styles.caption}>
        Scroll down to view my projects in different domains
      </div>
      </div>          
          <ProjectCrousel {...projectsDetails['projects']["web"]} title={"Web"} />
          <ProjectCrousel {...projectsDetails['projects']["app"]} title={"App"} flip/>
          <ProjectCrousel {...projectsDetails['projects']["web"]} title={"ML"} />
          <ProjectCrousel {...projectsDetails['projects']["web"]} title={"Other"} flip/>
        </div>
    )
}

export default Projects
