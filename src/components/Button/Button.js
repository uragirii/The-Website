import React, { Component } from 'react'


const styles = {
    "container": {
      "background": "#FF0066",
      "border": "1px solid rgba(255, 0, 102, 0.99)",
      "boxSizing": "border-box",
      "padding": "4px",
      "display": "flex",
      "justifyContent": "center",
      "textDecoration": "none",
      "width": "130",
      "color": "#000",
      "filter": "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))"
    },
    "text": {
      "fontFamily": "Consolas",
      "fontStyle": "normal",
      "fontWeight": "normal",
      "fontSize": "18px",
      "lineHeight": "21px",
      "letterSpacing": "0.005em",
      "margin": "4px",
      "marginRight": "1em",
      "marginLeft": "1em",
      "color": "#F4F1F1",
      "textDecoration": "none"
    },
    "outlined": {
      "border": "2px solid rgba(255, 0, 102, 0.99)",
      "boxSizing": "border-box",
      "padding": "4px",
      "display": "flex",
      "justifyContent": "center",
      "textDecoration": "none",
      "color": "#FF0066"
    },
    "outlined_text": {
      "fontFamily": "Consolas",
      "fontStyle": "normal",
      "fontWeight": "normal",
      "fontSize": "18px",
      "lineHeight": "21px",
      "letterSpacing": "0.005em",
      "margin": "4px",
      "marginRight": "1em",
      "marginLeft": "1em",
      "textDecoration": "none"
    },
    "outlined_hover": {
      "background": "#FF0066",
      "border": "2px solid rgba(255, 0, 102, 0.99)",
      "boxSizing": "border-box",
      "padding": "4px",
      "display": "flex",
      "justifyContent": "center",
      "textDecoration": "none",
      "color": "#F4F1F1",
      "filter": "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.4))"
    },
    "disabled": {
      "background": "#e5e5e5",
      "border": "2px solid rgba(255, 0, 102, 0.5)",
      "boxSizing": "border-box",
      "display": "flex",
      "padding": "4px",
      "justifyContent": "center",
      "textDecoration": "none",
      "color": "#AB9E9E"
    },
    "disabled_text": {
      "fontFamily": "Consolas",
      "fontStyle": "normal",
      "fontWeight": "normal",
      "fontSize": "18px",
      "lineHeight": "21px",
      "letterSpacing": "0.005em",
      "margin": "4px",
      "marginRight": "1em",
      "marginLeft": "1em",
      "textDecoration": "none"
    }
  }

export class Button extends Component {
    state = {
        hovered : false
    }
    hoverStyles = (styleNotHover, styleHover) =>{
        if(this.state.hovered) {
            return styleHover
        }
        else{
            return styleNotHover
        }
    }

    render() {
        const {type, label, href, disabled} = this.props
        
        if (type==="disabled" || disabled){
            // TODO: Add tooltip
            return (
                <a style={styles.disabled}>
                    <div  style={styles.disabled_text}>
                        {label}
                    </div>
                </a>
            )
        }

        if (type === "contained"){
            return (
                <a style={styles.container} href={href}>
                    <div  style= {styles.text}>
                        {label}
                    </div>
                </a>
            )
        }
        if (type === "outlined"){
            return (
                <a  
                style={this.hoverStyles(styles.outlined, styles.outlined_hover)} 
                href={href} 
                onMouseOver={()=>{this.setState({hovered: true})}} 
                onMouseOut={()=>{this.setState({hovered: false})}}
                >
                    <div style={styles.outlined_text} onMouseOver={()=>{this.setState({hovered: true})}}>
                        {label}
                    </div>
                </a>
            )
        }
        return(
            <div>Invalid type</div>
        )
    }
}

export default Button
