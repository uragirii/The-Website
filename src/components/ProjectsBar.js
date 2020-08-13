import React from 'react'

const styles = {
    "container" : { 
        "display" : "flex",
        "color": "#000000",
        "backgroundColor":"#c4c4c4",
        "borderRadius":20,  
        "padding":10,
        "paddingRight":"2%",
        "paddingLeft":"2%",
        "maxWidth" : "40%",
        "fontFamily": "Consolas",
        "fontStyle": "normal",
        "fontWeight": "bold",
        "fontSize": "18px",
        "lineHeight": "21px",
        "display": "flex",
        "alignItems": "center",
        "textAlign": "center",
        "color": "#000000",
        "justifyContent": "space-around"
      }
}


function ProjectsBar() {
    return (
        <div style={styles.container}>
            <span style={{flexShrink:0}}>
                Web Dev
            </span>
            <span style={{flexShrink:0}}>
                App Dev
            </span>
            <span style={{flexShrink:0}}>
                ML / DL
            </span>
            <span style={{flexShrink:0}}>
                Other Things
            </span>
        </div>
    )
}

export default ProjectsBar
