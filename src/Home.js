import React, {useRef} from 'react';
// import './App.css';
import { Heading, Button, Para, NavBar, Mobile, Desktop, BigScreen } from "./components/index";

import AboutMeBlob from './assests/AboutMe_Blob.png'
import StackBlob from './assests/Stack_Blob.png'
import jslogo from './assests/jslogo.png'
import photo from './assests/apoorv.jpg'
import colors from './colors'
import gsap from 'gsap'
import { useIntersection } from 'react-use'


const styles = {
  "section": {
    "height": "100vh",
    "maxHeight": "100vh",
    "backgroundColor":colors.primary.background,
    // "borderBottom": "1px solid #000000",
    "position" : "relative"
  },
  "heading" : {
    "fontFamily": "Montserrat",
    "fontStyle": "normal",
    "fontWeight": "bold",
    "fontSize": "36px",
    "lineHeight": "44px",
    "letterSpacing": "0.07em",
    "textAlign" : "center",
    "color" : colors.primary.text,
  },
  "caption" : {
    "fontFamily": "Consolas, monospace",
    "fontStyle": "normal",
    "fontWeight": "bold",
    "fontSize": "18px",
    "lineHeight": "21px",
    "textAlign" : "center",
    "marginTop" : "3%",
    "color" : colors.secondary.text,
  },
  "container" : {
    "paddingLeft" : "10%",
    "paddingRight" : "10%"
  },
  "lang" : {
    "fontFamily": "Consolas, monospace",
    "fontStyle": "normal",
    "fontWeight": "normal",
    "fontSize": "0.9rem",
    "lineHeight": "21px",
    "letterSpacing": "0.005em",
    "color": "#E5E5E5"
  },
  "langH" : {
    "fontFamily": "Montserrat",
    "fontStyle": "normal",
    "fontWeight": "bold",
    "fontSize": "18px",
    "lineHeight": "22px",
    "letterSpacing": "0.005em",
    "color": "#F4F1F1"
  }
}
// TODO: ADD LOGOS AND SHRINK THE SIZE
function Home() {
  const section1 = useRef(null)
  const section2 = useRef(null)
  const section3 = useRef(null)

  const intersection1 = useIntersection(section1, {
    root:null,
    rootMargin:"0px",
    threshold:0.8
  })

  const intersection2 = useIntersection(section2, {
    root:null,
    rootMargin:"0px",
    threshold:0.5
  })

  const intersection3 = useIntersection(section3, {
    root:null,
    rootMargin:"0px",
    threshold:0.5
  })

  const fadeIn =  (element)=>{
    gsap.to(element, 1,{
      opacity:1,
      y:-60,
      ease: 'power4.out',
      stagger: {
        amount:0.3
      }
    })
  }

  const fadeOut = (element)=> {
    gsap.to(element, 1,{
      opacity:0,
      y:-20,
      ease: 'power4.out',
      stagger: {
        amount:0.3
      }
    })
  }


  intersection1 && intersection1.intersectionRatio < 0.8 ? fadeOut(".fadeIn"): fadeIn(".fadeIn")
  intersection2 && intersection2.intersectionRatio < 0.5 ? fadeOut(".fadeIn2"): fadeIn(".fadeIn2")
  intersection3 && intersection3.intersectionRatio < 0.5 ? fadeOut(".fadeIn3"): fadeIn(".fadeIn3")



  return (
    <>
    <Desktop>
      <div className="Home" >
        <div style={styles.section} ref = {section1}>
        <div>
        <div style={{backgroundColor:colors.secondary.background}}>
          <div style={{position:"absolute", right:0, top: "4%", paddingRight:"4%"}}>
            <NavBar current="HOME" />
          </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{display:"block"}}><path fill={colors.primary.background} fill-opacity="1" d="M0,192L40,197.3C80,203,160,213,240,197.3C320,181,400,139,480,138.7C560,139,640,181,720,176C800,171,880,117,960,117.3C1040,117,1120,171,1200,213.3C1280,256,1360,288,1400,304L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>
          <div style={styles.heading} className="fadeIn">
          <span role="img" aria-label="Hand Wave Emoji">👋</span> Hi, I’m Apoorv Kansal
          </div>
          <div style={styles.caption} className="fadeIn">
          I design stuff for Web, Mobile and work on ML/ DL models.
          </div>
          <div className="fadeIn" >
            <div style={{display:"flex", justifyContent:"space-evenly", "marginTop":"3%" }}>
              <div style={{flexGrow:2}}>

              </div>
              <div style={{marginRight:"5%"}}>
                <Button type="contained" label="My Projects" href="/projects" />
              </div>
              <div >
                <Button type="outlined" label="Contact Me" href="/contact" />
              </div>
              <div style={{flexGrow:2}}>
                  
              </div>
            </div>
          </div>
        </div>
        </div>
        <div style={styles.section} ref = {section2} id= "about">
        <div style = {{ paddingLeft:"10%", zIndex:2, height:"100%", paddingTop:60}}>
          <div style= {{ display:'flex', height:"100%"}}>
            <div style= {{ flex: 4, paddingTop:"5%"}}>
              <div className="fadeIn2">
                <Heading label="About Me"/>
              </div>
              <div >
              <div style={{paddingTop:"9%"}} className="fadeIn2">
                <Para text="I’m a 4th year student at Vellore Institute of Technology, India with 8.69 CGPA. My subject of study is Electronics and Communication Engineering."/>
              </div>
              <div className="fadeIn2">
                <Para text="But my love resides with coding. I’ve always tried to bridge the gap between coding and designing. I have worked on many projects and managed teams. Check out my stack for all the languages I code in and check out my resume for info."/>
              </div>
              </div>
              <div style={{marginTop:"7%", display:"flex"}} className="fadeIn2">
                <div style={{marginRight:"5%"}}>
                  <Button type="contained" label="My Stack" href="#stack" />
                </div>
                <div >
                  <Button type="outlined" label="Resume" href="https://firebasestorage.googleapis.com/v0/b/the-website-ak.appspot.com/o/Resume_Updated.pdf?alt=media&token=59b3ef54-924f-4def-935b-8ccea7f391c1"/>
                </div>
              </div>
            </div>
            <div style={{flex:4, display:'flex', justifyContent:'center', alignItems:'flex-start'}}>
              <img src={photo} style={{maxHeight:360, "filter": "drop-shadow(0px 4px 4px #000000)","borderRadius":"25px", zIndex:3}} alt="Apoorv"/>
            </div>
          </div>
        </div>

              <img src={AboutMeBlob} style={{position:"absolute", right:0, top:0,height:"100vh", width:"40%" }} alt="Blob"/>
                
        </div>
        <div style={styles.section} ref = {section3} id="stack">
            <div style = {{paddingLeft:"10%", zIndex:2, height:"100%"}}>
              <div style= {{ display:'flex', height:"100%"}}>
                <div style= {{ flex: 4, paddingTop:"5%"}}   >
                  <div className="fadeIn3">
                  <Heading label="My Stack"/>
                  </div>

                  <div>
                  <div style={{paddingTop:"9%"}} className="fadeIn3" >
                    <Para text="Depending on the application I like to code in different languages."/>
                  </div>
                  <div className="fadeIn3">
                    <Para text="But that doesn’t mean I’m limited to only these languages. I am a pretty fast learner and always up for the challenge to learn new things."/>
                  </div>
                  <div className="fadeIn3">
                    <Para text="After all, if you know the basics, learning a new language is a cake walk."/>
                  </div>
                  </div>
                </div>
                <div style= {{ flex:4.5, marginLeft:"20%", paddingTop:"4%",display:"flex", flexDirection:"column", justifyContent:"space-between", zIndex:2 }}>
                  <div className="fadeIn3">
                  <span style={styles.langH}>Web Dev</span>
                    <div style={{display:"flex", paddingTop:"3%"}}>
                      <div style={{flex:1, paddingLeft:"5%"}}>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                          <svg viewBox="0 0 24 24" width="24px" height="24px" fill="#F7DF1E"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg></div>
                          <div style={{paddingLeft:"5%"}}>
                            JavaScript
                          </div>
                        </div>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                          <svg role="img" viewBox="0 0 24 24"  width="24px" height="24px" fill="#1572B6"><title>CSS3 icon</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>
                        </div>
                        <div style={{paddingLeft:"5%"}}>
                            CSS
                          </div>
                        </div>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                          <svg role="img" viewBox="0 0 24 24" width="24px" height="24px" fill="#E02826"><title>HTML5 icon</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
                            
                        </div>
                        <div style={{paddingLeft:"5%"}}>
                            HTML
                          </div>
                        </div>
                      </div>
                      <div style={{flex:1}}>
                      <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>                          
                            <svg role="img" viewBox="0 0 24 24" width="24px" height="24px" fill="#61DAFB"><title>React icon</title><path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"/></svg>
                        </div>
                        <div style={{paddingLeft:"5%"}}>
                            React JS
                          </div>
                        </div>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>                                                      
                        <svg role="img" viewBox="0 0 24 24" width="24px" height="24px" fill="#339933"><title>Node.js icon</title><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg>
                        </div>
                        <div style={{paddingLeft:"5%"}}>
                            Node.JS
                          </div>
                        </div>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>                          
                          <svg role="img" viewBox="0 0 24 24" width="24px" height="24px" fill="#47A248"><title>MongoDB icon</title><path d="M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0c-.002.019-.004.031-.005.049v.013h-.001c-.002.015-.003.025-.004.039v.015h-.002c0 .01-.002.018-.002.026v.026h-.003c-.001.008-.001.018-.003.025v.021h-.002c0 .007 0 .015-.002.021v.02h-.002c0 .01-.001.022-.002.032v.002c-.003.017-.006.034-.009.05v.008h-.002c-.001.004-.003.008-.003.012v.017h-.003v.022h-.005v.018h-.005v.021h-.004v.019h-.004v.017h-.006v.014h-.004v.018h-.004v.014h-.005v.013H11.8v.015h-.004c-.001.001-.001.003-.001.004v.01h-.003c-.001.002-.001.004-.001.006v.006h-.002c-.001.003-.002.008-.002.01-.003.007-.007.014-.01.021v.002c-.002.002-.004.005-.005.007v.008h-.004v.008h-.005v.008h-.003v.01h-.006v.014h-.004v.004h-.004v.008h-.004v.011h-.004v.008h-.006v.011h-.004v.008h-.005v.008h-.003v.01h-.005v.008h-.004v.006h-.004v.008h-.006V.76h-.004v.006h-.005v.008h-.004v.011h-.005v.004h-.003v.008h-.006v.004h-.004v.01h-.004v.004h-.004v.008h-.005v.006h-.003l-.002.004v.004h-.002c-.001.002-.002.002-.002.004v.001h-.001c-.001.003-.002.005-.004.007v.003h-.001c-.005.006-.008.012-.012.018v.001c-.002.002-.007.006-.009.01v.002h-.001c-.001.001-.003.002-.003.003v.003h-.002l-.003.003v.001h-.001c0 .001-.002.002-.003.004v.004h-.003l-.002.002v.002h-.002c0 .002-.002.002-.002.003v.003h-.004c0 .001-.001.002-.002.003V.92h-.003v.004h-.004V.93h-.004v.008h-.005V.93h-.005v.004h-.004V.94h-.005v.008h-.005v.004h-.004v.006h-.004v.004h-.004V.97h-.006v.004h-.004V.98h-.005v.004h-.004v.005h-.005v.01h-.002v.004h-.006v.005h-.004v.002h-.004v.004h-.005v.01h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.005v.004h-.004v.004h-.004v.01h-.004v.005h-.006v.004h-.004v.004h-.005v.006h-.004v.004h-.005v.007h-.004v.004h-.006V1.1h-.002v.004h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.003c-.001.001-.001.002-.001.002v.002h-.002l-.004.004s-.002.002-.004.003v.006h-.004v.005h-.004v.004h-.004v.004h-.003l-.003.003v.003h-.002l-.002.002v.003h-.002c-.005.006-.007.01-.014.016-.002.002-.008.007-.012.01-.012.008-.027.021-.039.032-.008.005-.016.012-.022.017v.001h-.001c-.016.013-.031.025-.049.039v.001c-.024.02-.047.039-.074.062V1.34h-.002c-.057.047-.117.1-.186.159V1.5h-.001c-.169.148-.37.338-.595.568l-.015.015-.004.004C9 3.494 6.857 6.426 6.631 11.164c-.02.392-.016.773.006 1.144v.009c.109 1.867.695 3.461 1.428 4.756v.001c.292.516.607.985.926 1.405v.001c1.102 1.455 2.227 2.317 2.514 2.526.441 1.023.4 2.779.4 2.779l.644.215s-.131-1.701.053-2.522c.057-.257.192-.476.349-.662.106-.075.42-.301.797-.645.018-.019.028-.036.044-.054 1.521-1.418 4.362-4.91 3.388-10.599z"/></svg>
                          </div>
                        <div style={{paddingLeft:"5%"}}>
                            MongoDB
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="fadeIn3">
                  <span style={styles.langH}>Machine Learning</span>
                    <div style={{display:"flex", paddingTop:"3%"}}>
                      <div style={{flex:1, paddingLeft:"5%"}}>
                      <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                          <svg viewBox="0 0 24 24"  width="24px" height="24px" fill="#3776AB"><title>Python icon</title><path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/></svg>
                        </div>
                        <div style={{paddingLeft:"5%"}}>
                            Python
                          </div>
                        </div>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                          
                        <svg width="24px" height="24px" fill="#FF6F00" viewBox="0 0 24 24"><title>TensorFlow icon</title><path d="M19.6 12l.1 4.7-3.1-1.8v6.7L12.5 24V0l10.2 5.9v5.3l-6.1-3.6v2.7zM1.3 5.9L11.5 0v24l-4.1-2.4v-14l-6.1 3.6z"/></svg>
                       </div>
                        <div style={{paddingLeft:"5%"}}>
                            Tensorflow
                          </div>
                        </div>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                          
                          <svg width="24px" height="24px" fill="#EE4C2C" viewBox="0 0 24 24"><title>PyTorch icon</title><path d="M12.005.04l-7.03 7.03a9.832 9.832 0 0 0 0 13.975 9.833 9.833 0 0 0 13.976 0c3.97-3.887 3.972-10.171.084-13.976l-1.738 1.737c2.895 2.895 2.895 7.608 0 10.503-2.894 2.894-7.608 2.894-10.503 0C3.9 16.414 3.9 11.7 6.794 8.806l4.632-4.631.58-.663zm3.556 3.886a1.323 1.323 0 0 0-1.323 1.323 1.323 1.323 0 0 0 1.323 1.323 1.323 1.323 0 0 0 1.323-1.323 1.323 1.323 0 0 0-1.323-1.323z"/></svg>
                          </div>
                        <div style={{paddingLeft:"5%"}}>
                            PyTorch
                          </div>
                        </div>
                      </div>
                      <div style={{flex:1}}>
                        <div style={styles.lang}> Pandas</div>
                        <div style={{paddingTop:"3%", ...styles.lang}}>Numpy</div>
                        <div style={{paddingTop:"3%", ...styles.lang}} >Matplotlib</div>
                      </div>
                    </div>
                  </div>


                  <div className="fadeIn3">
                    <span style={styles.langH}>Other Stuff</span>
                    <div style={{display:"flex", paddingTop:"3%"}}>
                      <div style={{flex:1, paddingLeft:"5%"}}>
                      <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                          
                          <svg width="24px" height="24px" fill="#F05032" viewBox="0 0 24 24"><title>Git icon</title><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>
                          </div>
                        <div style={{paddingLeft:"5%"}}>
                            Git
                          </div>
                        </div>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                          
                          
                          <svg width="24px" height="24px" fill="#00599C" viewBox="0 0 24 24"><title>C++ icon</title><path d="M22.393 6c-.167-.29-.398-.543-.652-.69L12.925.22c-.508-.293-1.339-.293-1.847 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.689l8.816 5.091c.508.293 1.339.293 1.847 0l8.816-5.091c.254-.146.485-.399.652-.689s.271-.616.271-.91V6.91c.002-.294-.102-.62-.269-.91zM12 19.109c-3.92 0-7.109-3.189-7.109-7.109S8.08 4.891 12 4.891a7.133 7.133 0 0 1 6.156 3.552l-3.076 1.781A3.567 3.567 0 0 0 12 8.445c-1.96 0-3.554 1.595-3.554 3.555S10.04 15.555 12 15.555a3.57 3.57 0 0 0 3.08-1.778l3.077 1.78A7.135 7.135 0 0 1 12 19.109zm7.109-6.714h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.789v-.79h.789v-.79h.79v.79h.79v.79z"/></svg>
                          </div>
                        <div style={{paddingLeft:"5%"}}>
                            C++
                          </div>
                        </div>
                        <div style={{paddingTop:"3%", ...styles.lang}} ></div>
                      </div>
                      <div style={{flex:1}}>
                        <div style={styles.lang} > React Native</div>
                        <div style={{paddingTop:"3%", ...styles.lang}}>Markdown</div>
                        <div style={{paddingTop:"3%", ...styles.lang}} ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <img src={StackBlob} style={{position:"absolute", width:"50%", right:0, top:-4,height:"100vh"}} alt="blob"/>
        </div>
        {/* Footer */}
        {/* <div style={{background:"#272A2C", marginTop:-12, zIndex:2}}>
          <div style={{padding:"2%", color:"#FFFFFF", textAlign:"center","fontFamily":"'Roboto Mono', monospace","whiteSpace":"pre-line\""}}>
          Made with &#10084; by Apoorv Kansal. If you loved this, checkout my <a href="https://github.com/uragirii">GitHub</a> for more.
          </div>
        </div> */}
    </div>
    </Desktop>
    <Mobile>
    <div className="Home" >
        <div style={styles.section} ref = {section1}>
        <div style={{display:"flex", justifyContent:"center", alignItems:"flex-start", flexDirection:"column", height:"100%", paddingRight:"5%", paddingLeft:"5%"}}>
          <div style={styles.heading} className="fadeIn">
          <span role="img" aria-label="Hand Wave Emoji">👋</span> Hi, I'm
          </div>
          <div style={{...styles.heading, display:"flex",alignItems:"flex-start", flexDirection:"column"}} className="fadeIn">
          Apoorv Kansal
          </div>
          <div style={{...styles.caption, marginTop:"10%", marginBottom:"10%", fontSize:"0.9rem"}} className="fadeIn">
          I design stuff for Web, Mobile and work on ML/ DL models.
          </div>
          <div className="fadeIn" >
            <div style={{display:"flex", justifyContent:"space-evenly", "marginTop":"3%", flexDirection:"column" }}>
              <div style={{marginBottom:"5%", display:"flex"}}>
                <Button type="contained" label="My Projects" href="/projects" />
              </div>
              <div >
                <Button type="outlined" label="Contact Me" href="/contact" />
              </div>
              <div style={{flexGrow:2}}>
                  
              </div>
            </div>
          </div>
        </div>
        </div>
        <div style={{...styles.section}} ref = {section2} id= "about">
        <div style = {{ paddingLeft:"10%", zIndex:2, height:"100%"}}>
          <div style= {{ display:'flex', height:"100%", paddingLeft:"2%", paddingRight:"10%", flexDirection:"column"}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:"25vh", width:"100%"}} className="fadeIn2">
              <img src={photo} style={{maxHeight:"25vh", "filter": "drop-shadow(0px 4px 4px #000000)","borderRadius":"10px", zIndex:3}} alt="Apoorv"/>
            </div>
            <div className="fadeIn2" style={{paddingTop:"9%"}}>
                <Heading label="About Me"/>
              </div>
              <div >
              <div style={{paddingTop:"3%"}} className="fadeIn2">
                <Para text="I’m a 4th year student at Vellore Institute of Technology, India with 8.69 CGPA."
                  css={{fontSize:"0.9rem"}}/>
              </div>
              <div className="fadeIn2" style={{paddingTop:"3%"}}>
                <Para text="My love resides with coding. I’ve always tried to bridge the gap between coding and designing. Check out my stack for all the languages I code in and check out my resume for info."
                 css={{fontSize:"0.9rem"}}/>
              </div>
              </div>
              <div style={{marginTop:"7%", display:"flex", paddingTop:"5%"}} className="fadeIn2">
                <div style={{marginRight:"5%"}}>
                  <Button type="contained" label="My Stack" href="#stack" />
                </div>
                <div >
                  <Button type="outlined" label="Resume" href="https://firebasestorage.googleapis.com/v0/b/the-website-ak.appspot.com/o/Resume_Updated.pdf?alt=media&token=59b3ef54-924f-4def-935b-8ccea7f391c1"/>
                </div>
              </div>

            
          </div>
        </div>                
        </div>
        <div style={styles.section} ref = {section3} id="stack">
            <div style = {{paddingLeft:"10%", zIndex:2, height:"100%"}}>
              <div style= {{ display:'flex', height:"100%", flexDirection:"column"}}>
                <div style= {{ paddingTop:"5%"}} >
                  <div className="fadeIn3" >
                    <Heading label="My Stack"/>
                  </div>
                  <div  >
                  <div style={{paddingTop:"5%"}} className="fadeIn3" >
                    <Para text="Depending on the application I like to code in different languages." css={{fontSize:"0.9rem"}}/>
                  </div>
                  <div className="fadeIn3" >
                    <Para text="I am a pretty fast learner and always up for the challenge to learn new things." css={{fontSize:"0.9rem"}}/>
                  </div>
                  <div className="fadeIn3" >
                    <Para text="After all, if you know the basics, learning a new language is a cake walk." css={{fontSize:"0.9rem"}}/>
                  </div>
                  </div>
                </div>
                <div style= {{marginTop:"5%",paddingBottom:"5%",display:"flex", flexDirection:"column", justifyContent:"space-between", zIndex:2 }}  >
                <div className="fadeIn3">
                  <span style={styles.langH}>Web Dev</span>
                    <div style={{display:"flex", paddingTop:"3%"}}>
                      <div style={{flex:1, paddingLeft:"5%"}}>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                          <svg viewBox="0 0 24 24" width="24px" height="24px" fill="#F7DF1E"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg></div>
                          <div style={{paddingLeft:"5%"}}>
                            JavaScript
                          </div>
                        </div>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                          <svg role="img" viewBox="0 0 24 24"  width="24px" height="24px" fill="#1572B6"><title>CSS3 icon</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>
                        </div>
                        <div style={{paddingLeft:"5%"}}>
                            CSS
                          </div>
                        </div>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                          <svg role="img" viewBox="0 0 24 24" width="24px" height="24px" fill="#E02826"><title>HTML5 icon</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>
                            
                        </div>
                        <div style={{paddingLeft:"5%"}}>
                            HTML
                          </div>
                        </div>
                      </div>
                      <div style={{flex:1}}>
                      <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>                          
                            <svg role="img" viewBox="0 0 24 24" width="24px" height="24px" fill="#61DAFB"><title>React icon</title><path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"/></svg>
                        </div>
                        <div style={{paddingLeft:"5%"}}>
                            React JS
                          </div>
                        </div>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>                                                      
                        <svg role="img" viewBox="0 0 24 24" width="24px" height="24px" fill="#339933"><title>Node.js icon</title><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg>
                        </div>
                        <div style={{paddingLeft:"5%"}}>
                            Node.JS
                          </div>
                        </div>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>                          
                          <svg role="img" viewBox="0 0 24 24" width="24px" height="24px" fill="#47A248"><title>MongoDB icon</title><path d="M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0c-.002.019-.004.031-.005.049v.013h-.001c-.002.015-.003.025-.004.039v.015h-.002c0 .01-.002.018-.002.026v.026h-.003c-.001.008-.001.018-.003.025v.021h-.002c0 .007 0 .015-.002.021v.02h-.002c0 .01-.001.022-.002.032v.002c-.003.017-.006.034-.009.05v.008h-.002c-.001.004-.003.008-.003.012v.017h-.003v.022h-.005v.018h-.005v.021h-.004v.019h-.004v.017h-.006v.014h-.004v.018h-.004v.014h-.005v.013H11.8v.015h-.004c-.001.001-.001.003-.001.004v.01h-.003c-.001.002-.001.004-.001.006v.006h-.002c-.001.003-.002.008-.002.01-.003.007-.007.014-.01.021v.002c-.002.002-.004.005-.005.007v.008h-.004v.008h-.005v.008h-.003v.01h-.006v.014h-.004v.004h-.004v.008h-.004v.011h-.004v.008h-.006v.011h-.004v.008h-.005v.008h-.003v.01h-.005v.008h-.004v.006h-.004v.008h-.006V.76h-.004v.006h-.005v.008h-.004v.011h-.005v.004h-.003v.008h-.006v.004h-.004v.01h-.004v.004h-.004v.008h-.005v.006h-.003l-.002.004v.004h-.002c-.001.002-.002.002-.002.004v.001h-.001c-.001.003-.002.005-.004.007v.003h-.001c-.005.006-.008.012-.012.018v.001c-.002.002-.007.006-.009.01v.002h-.001c-.001.001-.003.002-.003.003v.003h-.002l-.003.003v.001h-.001c0 .001-.002.002-.003.004v.004h-.003l-.002.002v.002h-.002c0 .002-.002.002-.002.003v.003h-.004c0 .001-.001.002-.002.003V.92h-.003v.004h-.004V.93h-.004v.008h-.005V.93h-.005v.004h-.004V.94h-.005v.008h-.005v.004h-.004v.006h-.004v.004h-.004V.97h-.006v.004h-.004V.98h-.005v.004h-.004v.005h-.005v.01h-.002v.004h-.006v.005h-.004v.002h-.004v.004h-.005v.01h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.005v.004h-.004v.004h-.004v.01h-.004v.005h-.006v.004h-.004v.004h-.005v.006h-.004v.004h-.005v.007h-.004v.004h-.006V1.1h-.002v.004h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.003c-.001.001-.001.002-.001.002v.002h-.002l-.004.004s-.002.002-.004.003v.006h-.004v.005h-.004v.004h-.004v.004h-.003l-.003.003v.003h-.002l-.002.002v.003h-.002c-.005.006-.007.01-.014.016-.002.002-.008.007-.012.01-.012.008-.027.021-.039.032-.008.005-.016.012-.022.017v.001h-.001c-.016.013-.031.025-.049.039v.001c-.024.02-.047.039-.074.062V1.34h-.002c-.057.047-.117.1-.186.159V1.5h-.001c-.169.148-.37.338-.595.568l-.015.015-.004.004C9 3.494 6.857 6.426 6.631 11.164c-.02.392-.016.773.006 1.144v.009c.109 1.867.695 3.461 1.428 4.756v.001c.292.516.607.985.926 1.405v.001c1.102 1.455 2.227 2.317 2.514 2.526.441 1.023.4 2.779.4 2.779l.644.215s-.131-1.701.053-2.522c.057-.257.192-.476.349-.662.106-.075.42-.301.797-.645.018-.019.028-.036.044-.054 1.521-1.418 4.362-4.91 3.388-10.599z"/></svg>
                          </div>
                        <div style={{paddingLeft:"5%"}}>
                            MongoDB
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="fadeIn3">
                  <span style={styles.langH}>Machine Learning</span>
                    <div style={{display:"flex", paddingTop:"3%"}}>
                      <div style={{flex:1, paddingLeft:"5%"}}>
                      <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                          <svg viewBox="0 0 24 24"  width="24px" height="24px" fill="#3776AB"><title>Python icon</title><path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/></svg>
                        </div>
                        <div style={{paddingLeft:"5%"}}>
                            Python
                          </div>
                        </div>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                          
                        <svg width="24px" height="24px" fill="#FF6F00" viewBox="0 0 24 24"><title>TensorFlow icon</title><path d="M19.6 12l.1 4.7-3.1-1.8v6.7L12.5 24V0l10.2 5.9v5.3l-6.1-3.6v2.7zM1.3 5.9L11.5 0v24l-4.1-2.4v-14l-6.1 3.6z"/></svg>
                       </div>
                        <div style={{paddingLeft:"5%"}}>
                            Tensorflow
                          </div>
                        </div>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                          
                          <svg width="24px" height="24px" fill="#EE4C2C" viewBox="0 0 24 24"><title>PyTorch icon</title><path d="M12.005.04l-7.03 7.03a9.832 9.832 0 0 0 0 13.975 9.833 9.833 0 0 0 13.976 0c3.97-3.887 3.972-10.171.084-13.976l-1.738 1.737c2.895 2.895 2.895 7.608 0 10.503-2.894 2.894-7.608 2.894-10.503 0C3.9 16.414 3.9 11.7 6.794 8.806l4.632-4.631.58-.663zm3.556 3.886a1.323 1.323 0 0 0-1.323 1.323 1.323 1.323 0 0 0 1.323 1.323 1.323 1.323 0 0 0 1.323-1.323 1.323 1.323 0 0 0-1.323-1.323z"/></svg>
                          </div>
                        <div style={{paddingLeft:"5%"}}>
                            PyTorch
                          </div>
                        </div>
                      </div>
                      <div style={{flex:1}}>
                        <div style={styles.lang}> Pandas</div>
                        <div style={{paddingTop:"3%", ...styles.lang}}>Numpy</div>
                        <div style={{paddingTop:"3%", ...styles.lang}} >Matplotlib</div>
                      </div>
                    </div>
                  </div>


                  <div className="fadeIn3">
                    <span style={styles.langH}>Other Stuff</span>
                    <div style={{display:"flex", paddingTop:"3%"}}>
                      <div style={{flex:1, paddingLeft:"5%"}}>
                      <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                          
                          <svg width="24px" height="24px" fill="#F05032" viewBox="0 0 24 24"><title>Git icon</title><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg>
                          </div>
                        <div style={{paddingLeft:"5%"}}>
                            Git
                          </div>
                        </div>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                          
                          
                          <svg width="24px" height="24px" fill="#00599C" viewBox="0 0 24 24"><title>C++ icon</title><path d="M22.393 6c-.167-.29-.398-.543-.652-.69L12.925.22c-.508-.293-1.339-.293-1.847 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.689l8.816 5.091c.508.293 1.339.293 1.847 0l8.816-5.091c.254-.146.485-.399.652-.689s.271-.616.271-.91V6.91c.002-.294-.102-.62-.269-.91zM12 19.109c-3.92 0-7.109-3.189-7.109-7.109S8.08 4.891 12 4.891a7.133 7.133 0 0 1 6.156 3.552l-3.076 1.781A3.567 3.567 0 0 0 12 8.445c-1.96 0-3.554 1.595-3.554 3.555S10.04 15.555 12 15.555a3.57 3.57 0 0 0 3.08-1.778l3.077 1.78A7.135 7.135 0 0 1 12 19.109zm7.109-6.714h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.789v-.79h.789v-.79h.79v.79h.79v.79z"/></svg>
                          </div>
                        <div style={{paddingLeft:"5%"}}>
                            C++
                          </div>
                        </div>
                        <div style={{paddingTop:"3%", ...styles.lang}} ></div>
                      </div>
                      <div style={{flex:1}}>
                        <div style={styles.lang} > React Native</div>
                        <div style={{paddingTop:"3%", ...styles.lang}}>Markdown</div>
                        <div style={{paddingTop:"3%", ...styles.lang}} ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </Mobile>
    <BigScreen>
    <div className="Home" >
        <div style={styles.section} ref = {section1}>
        <div>
        <div style={{backgroundColor:colors.secondary.background}}>
          <div style={{position:"absolute", right:0, top: "4%", paddingRight:"4%"}}>
            <NavBar current="HOME" />
          </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{display:"block"}}><path fill={colors.primary.background} fill-opacity="1" d="M0,192L40,197.3C80,203,160,213,240,197.3C320,181,400,139,480,138.7C560,139,640,181,720,176C800,171,880,117,960,117.3C1040,117,1120,171,1200,213.3C1280,256,1360,288,1400,304L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>
          <div style={styles.heading} className="fadeIn">
          <span role="img" aria-label="Hand Wave Emoji">👋</span> Hi, I’m Apoorv Kansal
          </div>
          <div style={styles.caption} className="fadeIn">
          I design stuff for Web, Mobile and work on ML/ DL models.
          </div>
          <div className="fadeIn" >
            <div style={{display:"flex", justifyContent:"space-evenly", "marginTop":"3%" }}>
              <div style={{flexGrow:2}}>

              </div>
              <div style={{marginRight:"5%"}}>
                <Button type="contained" label="My Projects" href="/projects" />
              </div>
              <div >
                <Button type="outlined" label="Contact Me" href="/contact" />
              </div>
              <div style={{flexGrow:2}}>
                  
              </div>
            </div>
          </div>
        </div>
        </div>
        <div style={styles.section} ref = {section2} id= "about">
        <div style = {{ paddingLeft:"10%", zIndex:2, height:"100%"}}>
          <div style= {{ display:'flex', height:"100%"}}>
            <div style= {{ flex: 4, paddingTop:"5%"}}>
              <div className="fadeIn2">
                <Heading label="About Me"/>
              </div>
              <div >
              <div style={{paddingTop:"9%"}} className="fadeIn2">
                <Para text="I’m a 4th year student at Vellore Institute of Technology, India with 8.69 CGPA. My subject of study is Electronics and Communication Engineering."/>
              </div>
              <div className="fadeIn2">
                <Para text="But my love resides with coding. I’ve always tried to bridge the gap between coding and designing. I have worked on many projects and managed teams. Check out my stack for all the languages I code in and check out my resume for info."/>
              </div>
              </div>
              <div style={{marginTop:"7%", display:"flex"}} className="fadeIn2">
                <div style={{marginRight:"5%"}}>
                  <Button type="contained" label="My Stack" href="#stack" />
                </div>
                <div >
                  <Button type="outlined" label="Resume" href="https://firebasestorage.googleapis.com/v0/b/the-website-ak.appspot.com/o/Resume_Updated.pdf?alt=media&token=59b3ef54-924f-4def-935b-8ccea7f391c1"/>
                </div>
              </div>
            </div>
            <div style={{flex:4, display:'flex', justifyContent:'center', alignItems:'flex-start'}}>
              <img src={photo} style={{maxHeight:360, "filter": "drop-shadow(0px 4px 4px #000000)","borderRadius":"25px", zIndex:3}} alt="Apoorv"/>
            </div>
          </div>
        </div>

              <img src={AboutMeBlob} style={{position:"absolute", right:0, top:0,height:"100vh", width:"40%" }} alt="Blob"/>
                
        </div>
        <div style={styles.section} ref = {section3} id="stack">
            <div style = {{paddingLeft:"10%", zIndex:2, height:"100%"}}>
              <div style= {{ display:'flex', height:"100%"}}>
                <div style= {{ flex: 4, paddingTop:"5%"}}   >
                  <div className="fadeIn3">
                  <Heading label="My Stack"/>
                  </div>

                  <div>
                  <div style={{paddingTop:"9%"}} className="fadeIn3" >
                    <Para text="Depending on the application I like to code in different languages."/>
                  </div>
                  <div className="fadeIn3">
                    <Para text="But that doesn’t mean I’m limited to only these languages. I am a pretty fast learner and always up for the challenge to learn new things."/>
                  </div>
                  <div className="fadeIn3">
                    <Para text="After all, if you know the basics, learning a new language is a cake walk."/>
                  </div>
                  </div>
                </div>
                <div style= {{ flex:4.5, marginLeft:"20%", paddingTop:"4%",display:"flex", flexDirection:"column", justifyContent:"space-between", zIndex:2 }}>
                  <div className="fadeIn3">
                  <span style={styles.langH}>Web Dev</span>
                    <div style={{display:"flex", paddingTop:"3%"}}>
                      <div style={{flex:1, paddingLeft:"5%"}}>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                            <img src={jslogo} style={{maxWidth:20,marginRight:5}} alt="JS Logo"/>
                          </div>
                          <div>
                            JavaScript
                          </div>
                        </div>
                        <div style={{paddingTop:"3%", ...styles.lang}}>HTML</div>
                        <div style={{paddingTop:"3%", ...styles.lang}} >CSS</div>
                      </div>
                      <div style={{flex:1}}>
                        <div style={styles.lang} > React JS</div>
                        <div style={{paddingTop:"3%", ...styles.lang}}>Node JS</div>
                        <div style={{paddingTop:"3%", ...styles.lang}} >MongoDB</div>
                      </div>
                    </div>
                  </div>

                  <div className="fadeIn3">
                  <span style={styles.langH}>Machine Learning</span>
                    <div style={{display:"flex", paddingTop:"3%"}}>
                      <div style={{flex:1, paddingLeft:"5%"}}>
                        <div style={styles.lang} >Python</div>
                        <div style={{paddingTop:"3%", ...styles.lang}}>TensorFlow</div>
                        <div style={{paddingTop:"3%", ...styles.lang}} >PyTorch</div>
                      </div>
                      <div style={{flex:1}}>
                        <div style={styles.lang}> Pandas</div>
                        <div style={{paddingTop:"3%", ...styles.lang}}>Numpy</div>
                        <div style={{paddingTop:"3%", ...styles.lang}} >Matplotlib</div>
                      </div>
                    </div>
                  </div>


                  <div className="fadeIn3">
                    <span style={styles.langH}>Other Stuff</span>
                    <div style={{display:"flex", paddingTop:"3%"}}>
                      <div style={{flex:1, paddingLeft:"5%"}}>
                        <div style={styles.lang}>C++</div>
                        <div style={{paddingTop:"3%", ...styles.lang}}>Git</div>
                        <div style={{paddingTop:"3%", ...styles.lang}} ></div>
                      </div>
                      <div style={{flex:1}}>
                        <div style={styles.lang} > React Native</div>
                        <div style={{paddingTop:"3%", ...styles.lang}}>Markdown</div>
                        <div style={{paddingTop:"3%", ...styles.lang}} ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <img src={StackBlob} style={{position:"absolute", width:"50%", right:0, top:-4,height:"100vh"}} alt="blob"/>
        </div>
        {/* Footer */}
        {/* <div style={{background:"#272A2C", marginTop:-12, zIndex:2}}>
          <div style={{padding:"2%", color:"#FFFFFF", textAlign:"center","fontFamily":"'Roboto Mono', monospace","whiteSpace":"pre-line\""}}>
          Made with &#10084; by Apoorv Kansal. If you loved this, checkout my <a href="https://github.com/uragirii">GitHub</a> for more.
          </div>
        </div> */}
    </div>
    </BigScreen>
    </>
  );
}

export default Home;
