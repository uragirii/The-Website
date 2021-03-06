import React, {useState, useRef} from 'react'

import { Heading, Button, Para, Mobile, BigScreen, Desktop } from "./index";
import colors from "../colors"
import SliderDots from './SliderDots'

import ProgressiveImage from "react-progressive-graceful-image";

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


function ProjectCrousel({images, headings, details, buttons, title, flip, placeholder}) {
    const [index, setIndex] = useState(0)

    const section1 = useRef(null)
    const section2 = useRef(null)

    if(!flip){
        return (
            <>
            <Mobile>
            <div style={{...styles.section }} ref={section1} >
                <div style = {{ paddingLeft:"10%", zIndex:2, height:"100%"}}>
                    <div style= {{ display:'flex', height:"100%", paddingLeft:"2%", paddingRight:"10%", flexDirection:"column"}}>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:"25vh", width:"100%"}} className="fadeIn2">
                        {/* <img src={images[index]} style={{maxHeight:"25vh", "filter": "drop-shadow(0px 4px 4px #000000)","borderRadius":"10px", zIndex:3}} alt="Apoorv"/>
                         */}
                        <ProgressiveImage src={images[index]} placeholder="" >
                                {(src, loading) => {
                                    return loading ? <div style={{height:"100%", width:"100%", opacity:"0.5"}}>{placeholder}</div>: <img src={src} alt={headings[index]}  style={{maxHeight:"25vh", "filter": "drop-shadow(0px 4px 4px #000000)","borderRadius":"10px", zIndex:3}}/>;
                                }}
                            </ProgressiveImage>
                        </div>
                        <div className="fadeIn1" style={{paddingTop:"9%"}}>
                            <Heading label={headings[index]}/>
                        </div>
                        <div >
                        <div style={{paddingTop:"3%"}} className="fadeIn1">
                            <Para text={details?details[index][0]:"Details not found"}
                            css={{fontSize:"0.9rem"}}/>
                        </div>
                        <div className="fadeIn1" style={{paddingTop:"3%"}}>
                            <Para text={details?details[index][1]:"Details not found"}
                            css={{fontSize:"0.9rem"}}/>
                        </div>
                        </div>
                        <div style={{marginTop:"7%", display:"flex", paddingTop:"5%"}} className="fadeIn1">
                            <div style={{marginRight:"5%"}}>
                            <Button type="contained" label={buttons[index]['data'][0]['label']} href={buttons[index]['data'][0]['href']} tooltip={buttons[index]['data'][0]['tooltip']} />
                            </div>
                            <div >
                            <Button type="outlined" label={buttons[index]['data'][1]['label']} href={buttons[index]['data'][1]['href']} tooltip={buttons[index]['data'][1]['tooltip']}/>
                            </div>
                        </div>
                        <div style={{ color:"white", display:'flex', justifyContent:"center", marginTop:"5%"}}>
                            <SliderDots index={index} setIndex={setIndex} length={headings.length} />
                        </div>

                    </div>
                    </div>                
        
                <div style={{position:"absolute", right:0, top:"10%", transform:"rotate(-90deg)", fontSize:"5rem", zIndex:0,color:"white", opacity:"0.2" }}>
                    {title}
                </div>
            </div>
            </Mobile>
            <Desktop>
            <div style={styles.section} ref = {section1}>
                <div style={{display:"flex", height:"100%"}}>
                    <div style={{display:"flex", flexDirection:"column", alignSelf:"center"}}>
                        <div style={{display:"flex", paddingTop:"1%", paddingBottom:"1%"}}>
                            <div style={{width:"50vw", display:"flex", justifyContent:"center", alignItems:"center" }} className="fadeIn">
                            <ProgressiveImage src={images[index]} placeholder="" >
                                {(src, loading) => {
                                    return loading ? <div style={{ opacity: loading ? 0.5 : 1 }} >{placeholder}</div> : <img src={src} alt={headings[index]}  height={350}/>;
                                }}
                            </ProgressiveImage>
                            </div>
                            <div style={{width:"50vw", display:"flex", alignItems:"center"}}>
                                <div>
                                    <div className="fadeIn"  >
                                    <Heading label={headings[index]}/>
                                    </div>
                                    <div style={{width:"70%", paddingTop:"2%" }} className="fadeIn">
                                        <Para text={details?details[index][0]:"Details not found"}/>
                                    </div>
                                    <div style={{width:"70%", paddingTop:"2%" }} className="fadeIn">
                                        <Para text={details?details[index][1]:"Details not found"}/>
                                    </div>
                                    <div style={{width:"70%", paddingTop:"5%", display:"flex" }} className="fadeIn">
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
            </Desktop>
            <BigScreen>
            <div style={styles.section} ref = {section1}>
                <div style={{display:"flex", height:"100%"}}>
                    <div style={{display:"flex", flexDirection:"column", alignSelf:"center"}}>
                        <div style={{display:"flex", paddingTop:"1%", paddingBottom:"1%"}}>
                            <div style={{width:"50vw", display:"flex", justifyContent:"center", alignItems:"center" }} className="fadeIn">
                                <ProgressiveImage src={images[index]} placeholder="" >
                                {(src, loading) => {
                                    return loading ? <div style={{ opacity: loading ? 0.5 : 1 }} >{placeholder}</div> : <img src={src} alt={headings[index]} style={{ opacity: loading ? 0.5 : 1 }} />;
                                }}
                            </ProgressiveImage>
                            </div>
                            <div style={{width:"50vw", display:"flex", alignItems:"center"}}>
                                <div>
                                    <div className="fadeIn"  >
                                    <Heading label={headings[index]}/>
                                    </div>
                                    <div style={{width:"70%", paddingTop:"2%" }} className="fadeIn">
                                        <Para text={details?details[index][0]:"Details not found"}/>
                                    </div>
                                    <div style={{width:"70%", paddingTop:"2%" }} className="fadeIn">
                                        <Para text={details?details[index][1]:"Details not found"}/>
                                    </div>
                                    <div style={{width:"70%", paddingTop:"5%", display:"flex" }} className="fadeIn">
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
            </BigScreen>
            </>
        )
    }
    return (
        <>
        <Mobile>
            <div style={{...styles.section }} ref={section2}>
                <div style = {{ paddingLeft:"10%", zIndex:2, height:"100%"}}>
                    <div style= {{ display:'flex', height:"100%", paddingLeft:"2%", paddingRight:"10%", flexDirection:"column"}}>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:"25vh", width:"100%"}} className="fadeIn2">
                        {/* <img src={images[index]} style={{maxHeight:"25vh", "filter": "drop-shadow(0px 4px 4px #000000)","borderRadius":"10px", zIndex:3}} alt="Apoorv"/>
                         */}
                        <ProgressiveImage src={images[index]} placeholder="" >
                                {(src, loading) => {
                                    return loading ? <div style={{height:"100%", width:"100%", opacity:"0.5"}}>{placeholder}</div>: <img src={src} alt={headings[index]}  style={{maxHeight:"25vh", "filter": "drop-shadow(0px 4px 4px #000000)","borderRadius":"10px", zIndex:3}}/>;
                                }}
                            </ProgressiveImage>
                        </div>
                        <div className="fadeIn2" style={{paddingTop:"9%"}}>
                            <Heading label={headings[index]}/>
                        </div>
                        <div >
                        <div style={{paddingTop:"3%"}} className="fadeIn2">
                            <Para text={details?details[index][0]:"Details not found"}
                            css={{fontSize:"0.9rem"}}/>
                        </div>
                        <div className="fadeIn2" style={{paddingTop:"3%"}}>
                            <Para text={details?details[index][1]:"Details not found"}
                            css={{fontSize:"0.9rem"}}/>
                        </div>
                        </div>
                        <div style={{marginTop:"7%", display:"flex", paddingTop:"5%"}} className="fadeIn2">
                            <div style={{marginRight:"5%"}}>
                            <Button type="contained" label={buttons[index]['data'][0]['label']} href={buttons[index]['data'][0]['href']} tooltip={buttons[index]['data'][0]['tooltip']} />
                            </div>
                            <div >
                            <Button type="outlined" label={buttons[index]['data'][1]['label']} href={buttons[index]['data'][1]['href']} tooltip={buttons[index]['data'][1]['tooltip']}/>
                            </div>
                        </div>
                        <div style={{ color:"white", display:'flex', justifyContent:"center", marginTop:"5%"}}>
                            <SliderDots index={index} setIndex={setIndex} length={headings.length} />
                        </div>

                    </div>
                    </div>                
        
                <div style={{position:"absolute", right:0, top:"10%", transform:"rotate(-90deg)", fontSize:"5rem", zIndex:0,color:"white", opacity:"0.2" }}>
                    {title}
                </div>
            </div>
            </Mobile>
        <Desktop>
        <div style={styles.section} ref={section2}>
                <div style={{display:"flex", height:"100%"}}>
                    <div style={{display:"flex", flexDirection:"column", alignSelf:"center"}}>
                        <div style={{display:"flex", paddingTop:"1%", paddingBottom:"1%"}}>
                            <div style={{width:"50vw", display:"flex", justifyContent:"center", alignItems:"center", paddingLeft:"15%"}}>
                            <div>
                                <div className="fadeIn2"  >
                                    <Heading label={headings[index]} />
                                </div>
                                <div style={{width:"80%", paddingTop:"2%" }} className="fadeIn2">
                                    <Para text={details?details[index][0]:"Details not found"} />
                                </div>
                                <div style={{width:"80%", paddingTop:"2%" }} className="fadeIn2">
                                    <Para text={details?details[index][1]:"Details not found"} />
                                </div>
                                <div style={{width:"80%", paddingTop:"5%", display:"flex" }} className="fadeIn2">
                                    <Button type="contained" label={buttons[index]['data'][0]['label']} css={{marginRight:"5%"}} href={buttons[index]['data'][0]['href']} tooltip={buttons[index]['data'][0]['tooltip']}/>
                                    <Button type="outlined" label={buttons[index]['data'][1]['label']} href={buttons[index]['data'][1]['href']} tooltip={buttons[index]['data'][1]['tooltip']}/>
                                </div>
                            </div>
                            </div>
                            <div style={{width:"50vw", display:"flex", alignItems:"center", paddingLeft:"10%" }} className="fadeIn2">
                            <ProgressiveImage src={images[index]} placeholder="" >
                                {(src, loading) => {
                                    return loading ? <div style={{ opacity: loading ? 0.5 : 1 }} >{placeholder}</div> : <img src={src} alt={headings[index]} height={350 } />;
                                }}
                            </ProgressiveImage>                  
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
        </Desktop>
        <BigScreen>
        <div style={styles.section} ref={section2}>
                <div style={{display:"flex", height:"100%"}}>
                    <div style={{display:"flex", flexDirection:"column", alignSelf:"center"}}>
                        <div style={{display:"flex", paddingTop:"1%", paddingBottom:"1%"}}>
                            <div style={{width:"50vw", display:"flex", justifyContent:"center", alignItems:"center", paddingLeft:"15%"}}>
                            <div>
                                <div className="fadeIn2"  >
                                    <Heading label={headings[index]} />
                                </div>
                                <div style={{width:"80%", paddingTop:"2%" }} className="fadeIn2">
                                    <Para text={details?details[index][0]:"Details not found"} />
                                </div>
                                <div style={{width:"80%", paddingTop:"2%" }} className="fadeIn2">
                                    <Para text={details?details[index][1]:"Details not found"} />
                                </div>
                                <div style={{width:"80%", paddingTop:"5%", display:"flex" }} className="fadeIn2">
                                    <Button type="contained" label={buttons[index]['data'][0]['label']} css={{marginRight:"5%"}} href={buttons[index]['data'][0]['href']} tooltip={buttons[index]['data'][0]['tooltip']}/>
                                    <Button type="outlined" label={buttons[index]['data'][1]['label']} href={buttons[index]['data'][1]['href']} tooltip={buttons[index]['data'][1]['tooltip']}/>
                                </div>
                            </div>
                            </div>
                            <div style={{width:"50vw", display:"flex", alignItems:"center", paddingLeft:"10%" }} className="fadeIn2">
                            <ProgressiveImage src={images[index]} placeholder="" >
                                {(src, loading) => {
                                    return loading ? <div style={{ opacity: loading ? 0.5 : 1 }} >{placeholder}</div> : <img src={src} alt={headings[index]} style={{ opacity: loading ? 0.5 : 1 }} />;
                                }}
                            </ProgressiveImage>            
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
        </BigScreen>
        </>
    )
}

export default ProjectCrousel
