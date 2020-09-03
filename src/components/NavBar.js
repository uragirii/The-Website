import React from 'react'
import colors from '../colors'
const styles = {
    text:{
        "fontFamily": "Consolas",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontSize": "18px",
        "lineHeight": "21px",
        "letterSpacing": "0.005em",
        "paddingRight" : "2rem",
        "display" : "flex",
        "width" : "auto",
        "color":colors.secondary.text,
        "textDecoration" :"none",
        "whiteSpace" : "no-wrap"
      },
    textHighlight : {
        "fontFamily": "Consolas",
        "fontStyle": "bold",
        "fontWeight": "normal",
        "fontSize": "22px",
        "lineHeight": "21px",
        "letterSpacing": "0.005em",
        "paddingRight" : "2rem",
        "display" : "flex",
        "width" : "auto",
        "color":colors.secondary.text,
        "textDecoration" :"none",
        "whiteSpace" : "no-wrap"
      }
}

const getStyles = (current, match)=>{
    if (current === match){
        return styles.textHighlight
    }
    else{
        return styles.text
    }
}

function NavBar({current}) {
    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginRight:"20%", whiteSpace:"nowrap"}}>
            <a style={getStyles(current,"HOME")} href = "/">Home</a>
            <a style={getStyles(current, "PROJECTS")} href = "projects">Projects</a>
            <a style={getStyles(current,"ABOUT")} href = "/#about">About Me</a>
            <a style={getStyles(current, "CONTACT")} href = "/contact">Contact Me</a> 
        </div>
    )
}

export default NavBar
