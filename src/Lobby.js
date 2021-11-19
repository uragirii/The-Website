import React, {useState} from 'react'
import colors from './colors'

import { Heading, Button, Para, NavBar, Mobile, Desktop, BigScreen, TextInput, LobbyCreate, LobbyView } from "./components/index";

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
    return <LobbyCreate />
}
