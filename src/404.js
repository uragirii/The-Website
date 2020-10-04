import React, {useEffect, useRef} from 'react'
import colors from './colors'
import { useLocation } from 'react-router-dom'
import { Button,Loader } from "./components/index";
import gsap from 'gsap'
import {analytics } from './firebaseAnalytics'

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
function E404() {
    let p1 = useRef(null)
    let p2 = useRef(null)
    let p3 = useRef(null)
    let p4 = useRef(null)
    let section = useRef(null)

    useEffect(() => {
        analytics.logEvent("404_visited", {referal : document.referrer})
    }, [])

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

    return (
        <div style={styles.section}>
            <div ref={el=>{section=el}} style={{visibility:"hidden"}}>
            <div style={{...styles.heading,display:'flex', justifyContent:'center' ,paddingTop:"10%", opacity:0}} ref={el => {p1=el}}>
                Seems like you have hit a dead end.
            </div>
            <div style={{...styles.caption,display:'flex', justifyContent:'center', opacity:0 }} ref={el => {p2=el}}>
                You tried to access {useLocation().pathname}. But we couldn't find it.
            </div>
            <div style={{...styles.caption,display:'flex', justifyContent:'center' ,opacity:0}} ref={el => {p3=el}}>
                It's a classic 404 error. Check your link again.
            </div>
            <div style={{display:'flex', justifyContent:'center', paddingTop:"2%", opacity:0}} ref={el => {p4=el}}>
                <Button type="contained" label="Visit Home" href="/" /> <Loader/> 
            </div>
            </div>
            <div  style={{...styles.heading,position:"absolute", bottom:100, left:"40%", opacity:"0.2", fontSize:144}}>
                404
            </div>
        </div>
    )
}

export default E404
