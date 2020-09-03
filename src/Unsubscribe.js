import React, {useEffect, useRef, useState} from 'react'
import colors from './colors'
import { Button, Loader } from "./components/index";
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
  const [status, setStatus] = useState("FORM")
  const POSTURL = "https://us-central1-the-website-ak.cloudfunctions.net/api/blacklist"
  const email = props.match.params.id

  const sendBlacklist = ()=>{
    console.log("clml")
    setStatus("LOADING")
    fetch(POSTURL,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email})
    })
    .then(res=>{
      if(res.status!==200){
        console.log("No status")
        new Error({ code : 403});
      }
      return res.json()
    })
      .then(res=>{
        console.log(res)
        const data = res
        if(!data.err){
            setStatus("BLACK")
        }
        else{
            setStatus("ERR")
        }
    })
    .catch(err=>{
      setStatus("ERR")
    })
  } 


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
    }, [status])
    const beforeBlack = (
            <div>
                <div style={{...styles.caption,display:'flex', justifyContent:'center', opacity:0 }} ref={el => {p2=el}}>
                    This will add "{email}" to my email blacklist. 
                </div>
                <div style={{...styles.caption,display:'flex', justifyContent:'center' ,opacity:0}} ref={el => {p3=el}}>
                    This means you won't be able to contact me through "Contact Me" page.
                </div>
                <div style={{display:'flex', justifyContent:'center', paddingTop:"2%", opacity:0}} ref={el => {p4=el}}>
                    <Button type="contained" label="Blacklist" onClick={sendBlacklist} />
                </div>
            </div>
    )
    const afterBlack = (
            <div style={{opacity:1}}>
                <div style={{...styles.caption,display:'flex', justifyContent:'center', opacity:0 }} ref={el => {p2=el}}>
                    "{email}" has been added to my email blacklist
                </div>
                <div style={{...styles.caption,display:'flex', justifyContent:'center' ,opacity:0}} ref={el => {p3=el}}>
                    Sorry for the inconvenience caused.
                </div>
                <div style={{display:'flex', justifyContent:'center', paddingTop:"2%", opacity:0}} ref={el => {p4=el}}>
                    {/* <Button type="contained" label="Home" href="/" /> */}
                </div>
            </div>
    ) 
    const err = (
        <div style={{opacity:1}}>
            <div style={{...styles.caption,display:'flex', justifyContent:'center', opacity:0 }} ref={el => {p2=el}}>
                The requested action could not be completed.
            </div>
            <div style={{...styles.caption,display:'flex', justifyContent:'center' ,opacity:0}} ref={el => {p3=el}}>
                Please try again later after sometime.
            </div>
            <div style={{display:'flex', justifyContent:'center', paddingTop:"2%", opacity:0}} ref={el => {p4=el}}>
                {/* <Button type="contained" label="Home" href="/" /> */}
            </div>
        </div>
    )
    const loader = (
        <div style={{opacity:1}}>
            <div style={{...styles.caption,display:'flex', justifyContent:'center', opacity:0 }} ref={el => {p2=el}}>
                <Loader />
            </div>
            <div style={{...styles.caption,display:'flex', justifyContent:'center' ,opacity:0}} ref={el => {p3=el}}>
                Adding Email to blacklist. Please Wait.
            </div>
            <div style={{display:'flex', justifyContent:'center', paddingTop:"2%", opacity:0}} ref={el => {p4=el}}>
                {/* <Button type="contained" label="Home" href="/" /> */}
            </div>
        </div>
    )
    let final
    if(status === "FORM"){
        final = beforeBlack
    }
    else if(status === "BLACK"){
        final = afterBlack
    }
    else if(status === "ERR"){
        final = err
    }
    
    else if(status === "LOADING"){
        final = loader
    }
    //TODO: Add function to blacklist
    return (
        <div style={styles.section}>
            <div ref={el=>{section=el}} style={{visibility:'hidden'}}>
            <div style={{...styles.heading,display:'flex', justifyContent:'center' ,paddingTop:"10%", opacity:0}} ref={el => {p1=el}}>
                Add Email to Blacklist
            </div>
            {final}
            </div>
            <div  style={{...styles.heading,position:"absolute", bottom:100, left:0, opacity:"0.2", fontSize:144}}>
                Blacklist
            </div>
        </div>
    )
}

export default Unsubscribe
