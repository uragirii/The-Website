import React, {useState} from 'react'
import { useParams } from 'react-router';

import {  LobbyVerify, LobbyView } from "./index";




export default function LobbyCode() {
    const [movie, setMovie] = useState(null)
    const [subs, setSubs] = useState(null)
    const { roomId } = useParams();
    

    // let enterCode = (
    //     <div style={styles.section }>
    //         <Heading label="Welcome to Lobby" css={{fontSize:32}} />
    //         <Para text="Watch videos with your friends" />
    //         <Para text="Enter the code" />
    //         <TextInput  />
    //     </div>   
    // )
    if(movie){
        return <LobbyView movie={movie} subs={subs} />
    }
    return <LobbyVerify saveMovie={setMovie} code={roomId} link="https://meet.google.com/zqy-mrgn-ouc" setSubs={setSubs}/>
}