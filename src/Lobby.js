import React, {useState} from 'react'
import colors from './colors'

import { Heading, Button, Para, NavBar, Mobile, Desktop, BigScreen, TextInput, LobbyVerify, LobbyView } from "./components/index";

const styles = {
    "section": {
      "height": "100vh",
      "maxHeight": "100vh",
      "backgroundColor":colors.primary.background,
      // "borderBottom": "1px solid #000000",
      "position" : "relative",
      "display" : 'flex',
      "justifyContent" : "center",
      "alignItems" : "center",
      "flexDirection" :"column"
    },
}


export default function Lobby() {
    const [movie, setMovie] = useState(null)
    const [subs, setSubs] = useState(null)
    const [code, setCode] = useState("")

    let enterCode = (
        <div style={styles.section }>
            <Heading label="Welcome to Lobby" css={{fontSize:32}} />
            <Para text="Watch videos with your friends" />
            <Para text="Enter the code" />
            <TextInput  />
        </div>   
    )
    if(movie){
        return <LobbyView movie={movie} subs={subs} />
    }
    return <LobbyVerify saveMovie={setMovie} code="5342" link="https://meet.google.com/zqy-mrgn-ouc" setSubs={setSubs}/>

    return (
        <div style={styles.section }>
            <Heading label="Welcome to Lobby" css={{fontSize:32}} />
            <Para text="Watch videos with your friends" />
            <Button type="contained" label="Create new" css={{marginTop:"2%"}}/>
            <Para text="or" css={{margin:"1%"}} />
            <Button type="outlined" label="Enter Code" css={{marginTop:"1%"}}/>
        </div>
    )
}
