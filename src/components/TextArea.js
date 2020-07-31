import React from 'react'

const styles =  {
    "notfocussed" : {
        "padding":10,
        "backgroundColor":"#E5E5E5",
        "border":"2px solid #c4c4c4",
        "borderRadius":7,
        "fontFamily":"Consolas",
        "fontStyle":"normal",
        "fontWeight":"normal",
        "fontSize":"14px",
        "lineHeight":"16px",
        "display":"flex",
        "alignItems":"center",
        "letterSpacing":"0.09em",
    },
    "focussed" : {
        "outlineColor" : "#FF0066",
        "padding":10,
        "backgroundColor":"#E5E5E5",
        "border":"2px solid #FF0066",
        "borderRadius":7,
        "fontFamily":"Consolas",
        "fontStyle":"normal",
        "fontWeight":"normal",
        "fontSize":"14px",
        "lineHeight":"16px",
        "display":"flex",
        "alignItems":"center",
        "letterSpacing":"0.09em",
     },
     "error": {
        "color" : "red",
        "fontFamily":"Consolas",
        "fontStyle":"normal",
        "fontWeight":"normal",
        "fontSize":"12px",
        "lineHeight":"14px",
        "display":"flex",
        "alignItems":"center",
        "letterSpacing":"0.09em",
        "marginTop" : 2
     }
}

const changeStyle = (focussed, notFocussedStyle, focussedStyle)=>{
    if (focussed) return focussedStyle
    return notFocussedStyle
}


function TextArea({placeholder, val, type}) {
    const [focussed, setFocussed] = React.useState(false);
    const [value, setValue] = React.useState("")
    const [err, setErr] = React.useState("")

    const changeVal = (e)=>{
        if (type ==="email" && e.target.value!=""){
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!re.test(String(value).toLowerCase())){
                setErr("Invalid Email Address")
                setValue(e.target.value)
            }
            else{
                setErr("")
                setValue(e.target.value)
            }
        }else{
            setValue(e.target.value)
            setErr("")

        }

    }
    val(value)

    return (
        <div>
            <textarea 
            style={changeStyle(focussed, styles.notfocussed, styles.focussed)} 
            placeholder={placeholder} 
            onFocus = {()=>setFocussed(true)}
            onBlur={()=>setFocussed(false)}
            value={value}
            onChange={changeVal}
            rows={10}
            cols={40}
            />
        </div>
    )
}

export default TextArea

