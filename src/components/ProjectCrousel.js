import React, {useState, useEffect} from 'react'

import { Heading, Button, Para, TextInput, TextArea, ProjectsBar } from "./index";
import iete from "../assests/IETE.png"
import colors from "../colors"
import SliderDots from './SliderDots'

const styles = {
    "section": {
      "height": "100vh",
      "maxHeight": "100vh",
      "position":"relative",
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


function ProjectCrousel({images, headings, details, buttons}) {
    const [index, setIndex] = useState(0)
    

    return (
        <div style={styles.section}>
            <div style={{display:"flex", height:"100%"}}>
                <div style={{display:"flex", flexDirection:"column", alignSelf:"center"}}>
                    <div style={{display:"flex", paddingTop:"1%", paddingBottom:"1%"}}>
                        <div style={{width:"50vw", display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <img src={images[index]}/>              
                        </div>
                        <div style={{width:"50vw", display:"flex", alignItems:"center"}}>
                            <div>
                                <Heading label={headings[index]}/>
                                <div style={{width:"70%", paddingTop:"2%"}}>
                                    <Para text={details?details[index][0]:"Details not found"}/>
                                </div>
                                <div style={{width:"70%", paddingTop:"2%"}}>
                                    <Para text={details?details[index][1]:"Details not found"}/>
                                </div>
                                <div style={{width:"70%", paddingTop:"5%", display:"flex"}}>
                                    <Button type="contained" label={buttons[index][0]} css={{marginRight:"5%"}}/>
                                    <Button type="outlined" label={buttons[index][1]} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ color:"white", display:'flex', justifyContent:"center"}}>
                        <SliderDots index={index} setIndex={setIndex} length={images.length} />
                    </div>
                </div>
            </div>
            <div style={{position:"absolute", right:0, bottom:"50%", transform:"rotate(-90deg)", fontSize:144, zIndex:0,color:"white", opacity:"0.2" }}>
                Web
            </div>
        </div>
    )
}

export default ProjectCrousel
