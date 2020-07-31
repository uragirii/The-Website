import React from 'react';
import './App.css';
import { Heading, Button, Para } from "./components/index";

import AboutMeBlob from './assests/AboutMe_Blob.png'
import StackBlob from './assests/Stack_Blob.png'
import jslogo from './assests/jslogo.png'
import photo from './assests/apoorv.jpg'

const styles = {
  "section": {
    "height": "100vh",
    "maxHeight": "100vh",

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
    "color": "#000000",
    "textAlign" : "center",
    "marginTop" : "1%"
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
  },
  "container" : {
    "paddingLeft" : "10%",
    "paddingRight" : "10%"
  },
  "lang" : {
    "fontFamily": "Consolas",
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
  return (
    <div className="Home">
        <div style={styles.section}>
        <svg width="100%" height="240" viewBox="0 0 1440 240" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M969.273 164.57C1129.91 178.782 1391.2 150.731 1440 60.5915V0L689.683 0L-22 0L-22 103.978L-22 239C-22 239 118.303 184.767 211.839 178.408C305.374 172.05 383.659 205.338 501.595 222.169C619.531 239 808.636 150.357 969.273 164.57Z" fill="#FF0066" fill-opacity="0.99" stroke="#FF0066"/>
          </svg>
          <div style={styles.heading}>
          👋 Hi, I’m Apoorv Kansal
          </div>
          <div style={styles.caption}>
          I design stuff for Web, Mobile and work on ML/ DL models.
          </div>
          <div>
            <div style={{display:"flex", justifyContent:"space-evenly", "marginTop":"3%" }}>
              <div style={{flexGrow:2}}>

              </div>
              <div style={{marginRight:"5%"}}>
                <Button type="contained" label="My Projects" />
              </div>
              <div >
                <Button type="outlined" label="Contact Me" />
              </div>
              <div style={{flexGrow:2}}>
                  
              </div>
            </div>
          </div>
        </div>
        <div style={styles.section}>
        <div style = {{ paddingLeft:"10%", zIndex:2, height:"100%"}}>
          <div style= {{ display:'flex', height:"100%"}}>
            <div style= {{ flex: 4, paddingTop:"5%"}}>
              <Heading label="About Me"/>
              <div style={{paddingTop:"9%"}}>
                <Para text="I’m a 4th year student at Vellore Instutite of Technology, India with 8.66 CGPA. My subject of study is Electronics and Communication Engineering."/>
              </div>
              <div>
                <Para text="But my love resides with coding. I’ve always tried to bridge the gap between coding and designing. I have worked on many projects and managed teams. Check out my stack for all the languages I code in and check out my resume for info."/>
              </div>
              <div style={{marginTop:"7%", display:"flex"}}>
                <div style={{marginRight:"5%"}}>
                  <Button type="contained" label="My Stack" />
                </div>
                <div >
                  <Button type="outlined" label="Resume" />
                </div>
              </div>
            </div>
            <div style={{flex:4, display:'flex', justifyContent:'center', alignItems:'center'}}>
              <img src={photo} style={{maxHeight:360, "filter":"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))","borderRadius":"25px", zIndex:3}}/>
            </div>
          </div>
        </div>

              <img src={AboutMeBlob} style={{position:"absolute", right:0, top:0,height:"100vh", width:"40%" }}/>
                
        </div>
        <div style={styles.section}>
            <div style = {{paddingLeft:"10%", zIndex:2, height:"100%"}}>
              <div style= {{ display:'flex', height:"100%"}}>
                <div style= {{ flex: 4, paddingTop:"5%"}}>
                  <Heading label="My Stack"/>
                  <div style={{paddingTop:"9%"}}>
                    <Para text="Depending on the application I like to code in different languages."/>
                  </div>
                  <div>
                    <Para text="But that doesn’t mean I’m limited to only these languages. I am a pretty fast learner and always up for the challenge to learn new things."/>
                  </div>
                  <div>
                    <Para text="After all, if you know the basics, learning a new language is a cake walk."/>
                  </div>
                </div>
                <div style= {{ flex:4.5, marginLeft:"10%", paddingTop:"4%",paddingBottom:"5%",display:"flex", flexDirection:"column", justifyContent:"space-between", zIndex:2 }}>
                  <div>
                  <span style={styles.langH}>Web Dev</span>
                    <div style={{display:"flex", paddingTop:"3%"}}>
                      <div style={{flex:1, paddingLeft:"5%"}}>
                        <div style={{...styles.lang, display:'flex', justifyContent:'flex-start', alignContent:"center"}} >
                          <div>
                            <img src={jslogo} style={{maxWidth:20,marginRight:5}}/>
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
            
            <img src={StackBlob} style={{position:"absolute", width:"50%", right:0, top:-4,height:"100vh"}}/>
        </div>
        {/* Footer */}
        <div style={{background:"#272A2C", marginTop:-12, zIndex:2}}>
          <div style={{padding:"2%", color:"#FFFFFF", textAlign:"center","fontFamily":"'Roboto Mono', monospace","whiteSpace":"pre-line\""}}>
          Made with &#10084; by Apoorv Kansal. If you loved this, checkout my <a href="https://github.com/uragirii">GitHub</a> for more.
          </div>
        </div>
    </div>
  );
}

export default Home;
