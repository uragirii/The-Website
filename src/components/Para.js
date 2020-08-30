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
        "marginTop" : "3%",
        "display" : "flex",
        "width" : "auto",
        "color":colors.secondary.text
      }
}


export default function Para({text}) {
    return (
        <div style={styles.text}>
            {text}
        </div>
    )
}
