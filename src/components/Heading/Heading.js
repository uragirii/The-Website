import React, { Component } from 'react'

const styles = {
    "div": {
      "textTransform": "uppercase",
      "fontFamily": "Montserrat",
      "fontStyle": "normal",
      "fontWeight": "bold",
      "fontSize": "18px",
      "lineHeight": "22px",
      "display": "flex",
      "letterSpacing": "0.11em",
      "color": "#000000"
    },
    "line": {
      "borderTop": "3px solid #FF0066",
      "paddingTop": "5px"
    },
    "notline": {
      "marginTop": "3px",
      "paddingTop": "5px"
    }
  }

export class Heading extends Component {
    render() {
        const {label} = this.props
        return (
            <div style={styles.div}>
                <span style={styles.line}>{label.slice(0,3)}</span><span style={styles.notline}>{label.slice(3,label.length)}</span>
            </div>
        )
    }
}

export default Heading
