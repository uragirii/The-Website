import React, { Component } from 'react'
import colors from '../colors'
import ReactTooltip from 'react-tooltip';

const styles = {
    "container": {
      "background": colors.secondary.background,
      "border": "1px solid rgba(213, 0, 86, 0.99)",
      "boxSizing": "border-box",
      "padding": "4px",
      "display": "flex",
      "justifyContent": "center",
      "textDecoration": "none",
      "width": "130",
      "color": "#000",
      "filter": "drop-shadow(0px 4px 4px #000000)",
      "cursor" : "pointer"
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
      "textDecoration": "none",
      "cursor" : "pointer"
    },
    "outlined": {
      "border": "2px solid rgba(213, 0, 86, 0.99)",
      "boxSizing": "border-box",
      "padding": "4px",
      "display": "flex",
      "justifyContent": "center",
      "textDecoration": "none",
      "color": colors.secondary.background,
      "cursor" : "pointer"
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
      "cursor" : "pointer"
    },
    "outlined_hover": {
      "background": colors.secondary.background,
      "border": "2px solid rgba(213, 0, 86, 0.99)",
      "boxSizing": "border-box",
      "padding": "4px",
      "display": "flex",
      "justifyContent": "center",
      "textDecoration": "none",
      "color": "#F4F1F1",
      "filter": "drop-shadow(0px 4px 4px #000000)",
      "cursor" : "pointer"
    },
    "disabled": {
      "background": "#e5e5e5",
      "border": "2px solid rgba(255, 0, 102, 0.5)",
      "boxSizing": "border-box",
      "display": "flex",
      "padding": "4px",
      "justifyContent": "center",
      "textDecoration": "none",
      "color": "#AB9E9E",
      "cursor" : "pointer"
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
      "textDecoration": "none",
      "cursor" : "pointer"
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
        const {type, label, href, disabled, css, tooltip, onClick} = this.props
        
        if (type==="disabled" || disabled){
            return (
                <a style={{...styles.disabled, ...css}} {...{...this.props}}>
                    <div  style={styles.disabled_text}>
                        {label}
                    </div>
                </a>
            )
        }

        if (type === "contained"){
            if(href || onClick){
                return (
                    <a style={{...styles.container, ...css}} href={href} {...{...this.props}} onClick={onClick}>
                        <div  style= {styles.text}>
                            {label}
                        </div>
                    </a>
                )
            }
            else{
                return (
                    <a style={{...styles.container, ...css, opacity:"0.4"}} href={href} {...{...this.props}} data-tip={tooltip}>
                        <ReactTooltip textColor={colors.secondary.text} backgroundColor={colors.secondary.background} effect="solid" place="bottom" />
                        <div  style= {styles.text}>
                            {label}
                        </div>
                    </a>
                )
            }
        }
        if (type === "outlined"){
            if(href || onClick){
                return (
                    <a  
                    style={{...this.hoverStyles(styles.outlined, styles.outlined_hover), ...css}} 
                    href={href} 
                    onMouseOver={()=>{this.setState({hovered: true})}} 
                    onMouseOut={()=>{this.setState({hovered: false})}}
                    {...{...this.props}}
                    onClick={onClick}
                     >
                        <div style={styles.outlined_text} onMouseOver={()=>{this.setState({hovered: true})}}>
                            {label}
                        </div>
                    </a>
                )
            }
            else{
                return (
                    <a  
                    style={{...this.hoverStyles(styles.outlined, styles.outlined_hover), ...css, opacity:"0.4"}} 
                    href={href} 
                    onMouseOver={()=>{this.setState({hovered: true})}} 
                    onMouseOut={()=>{this.setState({hovered: false})}}
                    {...{...this.props}}
                    data-tip={tooltip}
                     >
                        <ReactTooltip textColor={colors.secondary.text} backgroundColor={colors.secondary.background} effect="solid" place="bottom" />

                        <div style={styles.outlined_text} onMouseOver={()=>{this.setState({hovered: true})}}>
                            {label}
                        </div>
                    </a>
                )
            }
        }
        return(
            <div>Invalid type</div>
        )
    }
}

export default Button
