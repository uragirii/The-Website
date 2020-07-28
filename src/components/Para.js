import React from 'react'

const styles = {
    text:{
        "fontFamily": "Consolas",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontSize": "18px",
        "lineHeight": "21px",
        "letterSpacing": "0.005em",
        "color": "#000000",
        "marginTop" : "3%",
        "display" : "flex",
        "width" : "auto"
      }
}


export default function Para({text}) {
    return (
        <div style={styles.text}>
            {text}
        </div>
    )
}
