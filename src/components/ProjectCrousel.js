import React, {useState} from 'react'

import { Heading, Button, Para } from "./index";
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


function ProjectCrousel({images, headings, details, buttons, title, flip}) {
    const [index, setIndex] = useState(0)
    
    if(!flip){
        return (
            <div style={styles.section}>
                <div style={{display:"flex", height:"100%"}}>
                    <div style={{display:"flex", flexDirection:"column", alignSelf:"center"}}>
                        <div style={{display:"flex", paddingTop:"1%", paddingBottom:"1%"}}>
                            <div style={{width:"50vw", display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <img src={images[0]} alt="Project"/>              
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
                                        <Button type="contained" label={buttons[index]['data'][0]['label']} css={{marginRight:"5%"}} href={buttons[index]['data'][0]['href']} tooltip={buttons[index]['data'][0]['tooltip']}/>
                                        <Button type="outlined" label={buttons[index]['data'][1]['label']} href={buttons[index]['data'][1]['href']} tooltip={buttons[index]['data'][1]['tooltip']} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ color:"white", display:'flex', justifyContent:"center"}}>
                            <SliderDots index={index} setIndex={setIndex} length={headings.length} />
                        </div>
                    </div>
                </div>
                <div style={{position:"absolute", right:0, bottom:"50%", transform:"rotate(-90deg)", fontSize:144, zIndex:0,color:"white", opacity:"0.2" }}>
                    {title}
                </div>
            </div>
        )
    }
    return (
        <div style={styles.section}>
                <div style={{display:"flex", height:"100%"}}>
                    <div style={{display:"flex", flexDirection:"column", alignSelf:"center"}}>
                        <div style={{display:"flex", paddingTop:"1%", paddingBottom:"1%"}}>
                            <div style={{width:"50vw", display:"flex", justifyContent:"center", alignItems:"center", paddingLeft:"15%"}}>
                            <div>
                                <Heading label={headings[index]}/>
                                <div style={{width:"80%", paddingTop:"2%"}}>
                                    <Para text={details?details[index][0]:"Details not found"}/>
                                </div>
                                <div style={{width:"80%", paddingTop:"2%"}}>
                                    <Para text={details?details[index][1]:"Details not found"}/>
                                </div>
                                <div style={{width:"80%", paddingTop:"5%", display:"flex"}}>
                                    <Button type="contained" label={buttons[index]['data'][0]['label']} css={{marginRight:"5%"}} href={buttons[index]['data'][0]['href']} tooltip={buttons[index]['data'][0]['tooltip']}/>
                                    <Button type="outlined" label={buttons[index]['data'][1]['label']} href={buttons[index]['data'][1]['href']} tooltip={buttons[index]['data'][1]['tooltip']}/>
                                </div>
                            </div>
                            </div>
                            <div style={{width:"50vw", display:"flex", alignItems:"center", paddingLeft:"10%"}}>
                                <img src={images[0]} alt="Project"/>              
                            </div>
                        </div>
                        <div style={{ color:"white", display:'flex', justifyContent:"center"}}>
                            <SliderDots index={index} setIndex={setIndex} length={headings.length} />
                        </div>
                    </div>
                </div>
                <div style={{position:"absolute", left:"-5%", bottom:"50%", transform:"rotate(-90deg)", fontSize:144, zIndex:0,color:"white", opacity:"0.2" }}>
                    {title}
                </div>
            </div>
    )
}

export default ProjectCrousel
