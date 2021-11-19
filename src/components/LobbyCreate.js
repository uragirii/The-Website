
import React, {useRef, useState} from 'react'
import colors from '../colors'
import { Heading, Para, NavBar, Mobile, Desktop, BigScreen, TextInput } from "./index";
import logo from '../assests/favicon.png'
import upload from '../assests/Upload.png'
import video from '../assests/Video.png'
import Button from './Button'
import firebase from '../firebaseAnalytics'
import { useHistory } from 'react-router';


const styles = {
    "section": {
      "height": "100vh",
      "maxHeight": "100vh",
      "backgroundColor":colors.primary.background,
      // "borderBottom": "1px solid #000000",
      "position" : "relative",
    //   "display" : 'flex',
    //   "justifyContent" : "center",
    //   "alignItems" : "center",
    //   "flexDirection" :"column"
    },
}



export default function LobbyCreate({saveMovie, code, link,setSubs}) {
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const file = useRef(null)

    const selectFile = async (e)=>{
        console.log(e)
        setLoading(true);
        const file1 = e.target.files[0];
        const file2 = e.target.files[1];
        console.log(file1, file2)
        // setMovie(selectedFile)
        if(!file1){
          setLoading(false)
          return;}
        const sizeArr = file2 ? [file1?.size, file2?.size] : [file1.size];
        const roomNum = Math.floor(Math.random()*10000);
        const lobbyRef = firebase.database().ref('lobby/'+roomNum);
        const detailsRef = lobbyRef.child("details");
        const lobbyStatus = lobbyRef.child("status")
        const lobbyProgress = lobbyRef.child("progress")
        lobbyStatus.set({play:false});
        lobbyProgress.set({current:"0"})
        console.log(sizeArr)
        await detailsRef.set(sizeArr);
        history.push("/lobby/"+roomNum)
        console.log("Created ",roomNum)
        setLoading(false)
        
    }
    return (
        <div style={styles.section}> 
            <div style={{paddingTop:"5%", paddingRight:"10%", paddingLeft:"7%"}}>
                <div >
                    <Heading label="Lobby"/>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{maxWidth:"40%", marginTop:"5%"}}>
                        <div style={{ color:"white", fontFamily:"Montserrat", fontSize:18}}>
                           Create your Room
                        </div>
                        <Para text="Upload files (either movie and subs or only movie) to continue" />
                        <div style={{display:'flex'}}>
                        

                        </div>
                        <div style={{marginTop:'5%', display:'flex'}}>
                        
                        </div>
                    </div>
                    <div style={{textAlign:"center",paddingLeft:"20%"}}>
                        {
                            loading?(
                                <>
                                    <Para text={"loading"} css={{marginTop:"5%"}}/>
                                </>
                            ):
                            (
                                <>
                                    <input type="file"  ref={file} style={{display:'none'}} onChange={selectFile} multiple/>
                                    <img src={upload} alt="Upload" onClick={()=>{file.current.click()}} />
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
                    
        </div>
    )
}
