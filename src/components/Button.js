import React, { Component } from 'react'
import colors from '../colors'

const styles = {
    "container": {
      "background": colors.secondary.background,
      "border": "1px solid rgba(255, 0, 102, 0.99)",
      "boxSizing": "border-box",
      "padding": "4px",
      "display": "flex",
      "justifyContent": "center",
      "textDecoration": "none",
      "width": "130",
      "color": "#000",
      "filter": "drop-shadow(0px 4px 4px #000000);"
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
      "color": colors.secondary.text,
      "textDecoration": "none"
    },
    "outlined": {
      "border": "2px solid rgba(255, 0, 102, 0.99)",
      "boxSizing": "border-box",
      "padding": "4px",
      "display": "flex",
      "justifyContent": "center",
      "textDecoration": "none",
      "color": colors.secondary.background
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
      "textDecoration": "none",
      "color": colors.secondary.text,
    },
    "outlined_hover": {
      "background": colors.secondary.background,
      "border": "2px solid rgba(255, 0, 102, 0.99)",
      "boxSizing": "border-box",
      "padding": "4px",
      "display": "flex",
      "justifyContent": "center",
      "textDecoration": "none",
      "color": "#F4F1F1",
      "filter": "drop-shadow(0px 4px 4px #000000);"
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
                <a style={styles.disabled} {...{...this.props}}>
                    <div  style={styles.disabled_text}>
                        {label}
                    </div>
                </a>
            )
        }

        if (type === "contained"){
            return (
                <a style={styles.container} href={href} {...{...this.props}}>
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
                {...{...this.props}}
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
