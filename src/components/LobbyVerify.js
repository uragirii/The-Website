
import React, {useRef, useState} from 'react'
import colors from '../colors'
import { Heading, Button, Para, NavBar, Mobile, Desktop, BigScreen, TextInput } from "./index";
import logo from '../assests/favicon.png'
import upload from '../assests/Upload.png'
import video from '../assests/Video.png'

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



export default function LobbyVerify({saveMovie, code, link,setSubs}) {
    const [uploaded, setUploaded] = useState(false)
    const [movie, setMovie ]  = useState(null)
    const [verified, setVerified] = useState(false)
    const file = useRef(null)
    const size = 1006884907

    const checkAndProceed = (selectedFile, subs)=>{
        if(selectedFile.size == size){
            setVerified(true)
            saveMovie(selectedFile)
            setSubs(subs)
        }
        else if(subs.size == size){
            setVerified(true)
            saveMovie(subs)
            setSubs(selectedFile)
        }
        else{
            setVerified(false)
        }
    }

    const selectFile = (e)=>{
        console.log(e)
        if(e.target.files.length==2){
            // console.log(e.target.files)
            const selectedFile = e.target.files[0]
            const subs = e.target.files[1]
            console.log(selectedFile,subs)
            setMovie(selectedFile)
            setUploaded(true)
            checkAndProceed(selectedFile,subs)
        }
    }

    return (
        <div style={styles.section}> 
            <div style={{paddingTop:"5%", paddingRight:"10%", paddingLeft:"7%"}}>
                <div >
                    <Heading label="Lobby"/>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{maxWidth:"40%", marginTop:"5%"}}>
                        <Para text="Select your video" />
                        <Para text="Your video will be checked with main video and then you can join the team" />
                        <div style={{marginTop:"10%", color:"white", fontFamily:"Montserrat", fontSize:18}}>
                            Meeting Link
                        </div>
                        <Para text={link} />
                    </div>
                    <div style={{textAlign:"center",paddingLeft:"20%"}}>
                        {
                            uploaded?(
                                <>
                                    <img src={video} alt="Video"  onClick={()=>{file.current.click()}} />
                                    <Para text={movie.name} css={{marginTop:"5%"}}/>
                                    <Para text={verified?"File is correct":"File is not same"} css={{marginTop:"5%"}}/>
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
            <div style={{backgroundColor:"#FF0066", paddingRight:"5%", paddingLeft:"5%", padding:"1%", position:'absolute', bottom:0, right:"45%"}}>
                <div style={{color:"white", fontFamily:"Montserrat", fontSize:18}}>
                    Code : {code}
                </div>    
            </div>        
        </div>
    )
}
