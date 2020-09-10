import React from 'react'
import colors from '../colors'
const styles = {
    text:{
        "fontFamily": "Consolas, monospace",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontSize": "18px",
        "lineHeight": "21px",
        "letterSpacing": "0.005em",
        "marginTop" : "3%",
        "display" : "flex",
        "width" : "auto",
        "color":colors.secondary.text
      }
}


export default function Para({text, css}) {
    return (
        <div style={{...styles.text, ...css}}>
            {text}
        </div>
    )
}
