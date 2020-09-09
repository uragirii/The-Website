import React from 'react'
import colors from "./colors"
import projectsDetails from './projectsDetails'
import { NavBar } from "./components/index";
// Web Projects Images
import iete from './assests/Web/IETE_Output.png'
import website from './assests/Web/TheWebsite_Output.png'
import coursepal from './assests/Web/CoursePal_Output.png'
import friends from './assests/Web/Friends_Output.png'
import home from './assests/Web/Home_Output.png'
import freeflix from './assests/Web/FreeFlix_Output.png'
// App Project Images
import chatapp from './assests/App/ChatApp.png'
import hellorDoctor from './assests/App/Hello Doctor.png'
import vitask from './assests/App/VITask.png'
// ML Project Images
import friendsg from "./assests/Ml/Friends_Generator.png";
import image from "./assests/Ml/Image.png";
import twitter from "./assests/Ml/Twitter.png";
import misc from "./assests/Ml/misc.png";
import ProjectCrousel from "./components/ProjectCrousel"
// Others
import anyme from "./assests/Others/anYmedl.png";
import captcha from "./assests/Others/captcha.png";
import ranime from "./assests/Others/ranime.png";
import wallpy from "./assests/Others/wallpy.png";
import jut from "./assests/Others/jut.png";

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
  projectsDetails['projects']["ml-dl"]['images'].push(iete)
  projectsDetails['projects']["other"]['images'].push(iete)

  document.title = "Apoorv Kansal | Projects"
    return (
        <div>
          <div style={styles.section}>
          <div style={{position:"absolute", right:0, top: "4%", paddingRight:"4%"}}>
            <NavBar current="PROJECTS" />
          </div>
      <div style={{backgroundColor:colors.secondary.background, }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310" style={{display:"block"}}>
        <path fill={colors.primary.background} fill-opacity="1" d="M0,32L30,26.7C60,21,120,11,180,21.3C240,32,300,64,360,80C420,96,480,96,540,106.7C600,117,660,139,720,160C780,181,840,203,900,213.3C960,224,1020,224,1080,218.7C1140,213,1200,203,1260,176C1320,149,1380,107,1410,85.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg>
        
      </div>
      <div style={styles.heading}>
        <span role="img" aria-label="Projects Emoji">📝</span> My Projects
      </div>
      <div style={styles.caption}>
        Scroll down to view my projects in different domains
      </div>
      </div>          
          <ProjectCrousel {...projectsDetails['projects']["web"]} title={"Web"} images={[iete, coursepal, friends, freeflix, website, home]}/>
          <ProjectCrousel {...projectsDetails['projects']["app"]} title={"App"} flip images={[vitask, hellorDoctor, chatapp]}/>
          <ProjectCrousel {...projectsDetails['projects']["ml-dl"]} title={"ML"} images={[image, friendsg, twitter, misc]} />
          <ProjectCrousel {...projectsDetails['projects']["other"]} title={"Other"} flip images={[ranime, vitask, captcha, anyme, jut, wallpy]}/>
        </div>
    )
}

export default Projects
