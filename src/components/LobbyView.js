import React from 'react'
import colors from '../colors'
import { Heading, Button, Para, NavBar, Mobile, Desktop, BigScreen, TextInput } from "./index";
import logo from '../assests/favicon.png'
import subs from './subs'
import ReactNetflixPlayer from './Player'
const styles = {
    "section": {
      "height": "100vh",
      "maxHeight": "100vh",
      "backgroundColor":colors.primary.background,
      // "borderBottom": "1px solid #000000",
      "position" : "relative",
      "display" : 'flex',
    //   "justifyContent" : "center",
    //   "alignItems" : "center",
    //   "flexDirection" :"column"
    },
}


export default function LobbyView({movie, subs}) {
    const url = URL.createObjectURL(movie)
    let subUrl = URL.createObjectURL(subs)
    // subUrl = subUrl.slice(0, subUrl.size, "text/srt")
    console.log(url)
    return (
        <div style={styles.section}>
            <div style={{padding:"2%", paddingLeft:"5%"}}>
                <div style={{display:'flex', alignItems:"center"}}>
                    <img src={logo} alt="logo" height={50} />
                    <Heading label="Lobby" css={{marginLeft:"10%"}}/>
                </div>
                <Para text="Code : 3325" css={{paddingTop:"10%"}} />
            </div>
            <ReactNetflixPlayer src={url}  subs={subUrl}/>
        </div>
    )
}
