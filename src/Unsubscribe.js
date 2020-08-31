import React, {useEffect, useRef} from 'react'
import colors from './colors'
import { Button } from "./components/index";
import gsap from 'gsap'

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
        "fontSize": "28px",
        "lineHeight": "44px",
        "letterSpacing": "0.07em",
        "textAlign" : "center",
        "color" : colors.primary.text,
      },
      "caption" : {
        "fontFamily": "Consolas",
        "fontStyle": "normal",
        "fontWeight": "bold",
        "fontSize": "18px",
        "lineHeight": "21px",
        "textAlign" : "center",
        "marginTop" : "3%",
        "color" : colors.secondary.text,
      },
}
function Unsubscribe(props) {
    let p1 = useRef(null)
    let p2 = useRef(null)
    let p3 = useRef(null)
    let p4 = useRef(null)
    let section = useRef(null)

    useEffect(() => {
        section.style.visibility="visible"
        gsap.to(p1,1, {
            opacity:1,
            y:-60,
            ease: 'power4.out'
        })
        gsap.to(p2,1, {
            opacity:0.9,
            y:-60,
            ease: 'power4.out',
            delay:0.3
        })
        gsap.to(p3,1, {
            opacity:0.5,
            y:-60,
            ease: 'power4.out',
            delay:0.6
        })
        gsap.to(p4,1, {
            opacity:1,
            y:-60,
            ease: 'power4.out',
            delay:0.8
        })
    }, [])
    //TODO: Add function to blacklist
    const email = props.match.params.id
    return (
        <div style={styles.section}>
            <div ref={el=>{section=el}} style={{visibility:"hidden"}}>
            <div style={{...styles.heading,display:'flex', justifyContent:'center' ,paddingTop:"10%", opacity:0}} ref={el => {p1=el}}>
                Add Email to Blacklist
            </div>
            <div style={{...styles.caption,display:'flex', justifyContent:'center', opacity:0 }} ref={el => {p2=el}}>
                This will add "{email}" to my email blacklist. 
            </div>
            <div style={{...styles.caption,display:'flex', justifyContent:'center' ,opacity:0}} ref={el => {p3=el}}>
                This means you won't be able to contact me through "Contact Me" page.
            </div>
            <div style={{display:'flex', justifyContent:'center', paddingTop:"2%", opacity:0}} ref={el => {p4=el}}>
                <Button type="contained" label="Blacklist" href="/" />
            </div>
            </div>
            <div  style={{...styles.heading,position:"absolute", bottom:100, left:0, opacity:"0.2", fontSize:144}}>
                Blacklist
            </div>
        </div>
    )
}

export default Unsubscribe
