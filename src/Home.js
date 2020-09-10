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
    "fontSize": "18px",
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
    threshold:0.8
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
        <div style = {{ paddingLeft:"10%", zIndex:2, height:"100%"}}>
          <div style= {{ display:'flex', height:"100%"}}>
            <div style= {{ flex: 4, paddingTop:"5%"}}>
              <div className="fadeIn2">
                <Heading label="About Me"/>
              </div>
              <div >
              <div style={{paddingTop:"9%"}} className="fadeIn2">
                <Para text="I’m a 4th year student at Vellore Instutite of Technology, India with 8.69 CGPA. My subject of study is Electronics and Communication Engineering."/>
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
                <div style= {{ flex: 4, paddingTop:"5%"}} className="fadeIn3">
                  <Heading label="My Stack"/>
                  <div>
                  <div style={{paddingTop:"9%"}} >
                    <Para text="Depending on the application I like to code in different languages."/>
                  </div>
                  <div>
                    <Para text="But that doesn’t mean I’m limited to only these languages. I am a pretty fast learner and always up for the challenge to learn new things."/>
                  </div>
                  <div>
                    <Para text="After all, if you know the basics, learning a new language is a cake walk."/>
                  </div>
                  </div>
                </div>
                <div style= {{ flex:4.5, marginLeft:"10%", paddingTop:"4%",paddingBottom:"5%",display:"flex", flexDirection:"column", justifyContent:"space-between", zIndex:2 }}>
                  <div>
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

                  <div>
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


                  <div>
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
                <Para text="I’m a 4th year student at Vellore Instutite of Technology, India with 8.69 CGPA."
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
              <div style= {{ display:'flex', height:"100%"}}>
                <div style= {{ flex: 4, paddingTop:"5%"}} className="fadeIn3">
                  <Heading label="My Stack"/>
                  <div>
                  <div style={{paddingTop:"9%"}} >
                    <Para text="Depending on the application I like to code in different languages."/>
                  </div>
                  <div>
                    <Para text="But that doesn’t mean I’m limited to only these languages. I am a pretty fast learner and always up for the challenge to learn new things."/>
                  </div>
                  <div>
                    <Para text="After all, if you know the basics, learning a new language is a cake walk."/>
                  </div>
                  </div>
                </div>
                <div style= {{ flex:4.5, marginLeft:"10%", paddingTop:"4%",paddingBottom:"5%",display:"flex", flexDirection:"column", justifyContent:"space-between", zIndex:2 }}>
                  <div>
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

                  <div>
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


                  <div>
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
                <Para text="I’m a 4th year student at Vellore Instutite of Technology, India with 8.69 CGPA. My subject of study is Electronics and Communication Engineering."/>
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
                <div style= {{ flex: 4, paddingTop:"5%"}} className="fadeIn3">
                  <Heading label="My Stack"/>
                  <div>
                  <div style={{paddingTop:"9%"}} >
                    <Para text="Depending on the application I like to code in different languages."/>
                  </div>
                  <div>
                    <Para text="But that doesn’t mean I’m limited to only these languages. I am a pretty fast learner and always up for the challenge to learn new things."/>
                  </div>
                  <div>
                    <Para text="After all, if you know the basics, learning a new language is a cake walk."/>
                  </div>
                  </div>
                </div>
                <div style= {{ flex:4.5, marginLeft:"10%", paddingTop:"4%",paddingBottom:"5%",display:"flex", flexDirection:"column", justifyContent:"space-between", zIndex:2 }}>
                  <div>
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

                  <div>
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


                  <div>
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
