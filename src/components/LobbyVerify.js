
import React, {useEffect, useRef, useState} from 'react'
import colors from '../colors'
import { Heading, Para, NavBar, Mobile, Desktop, BigScreen, TextInput } from "./index";
import logo from '../assests/favicon.png'
import upload from '../assests/Upload.png'
import video from '../assests/Video.png'
import Button from './Button'
import firebase from '../firebaseAnalytics'

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
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState([]);
    
    useEffect(()=>{
    const lobbyRef = firebase.database().ref("lobby").child(code);
    lobbyRef.on('value', (snapshot)=>{
        console.log(snapshot.val())
        setDetails(snapshot.val().details);
        setLoading(false);
    })
    },[])

    const checkAndProceed = (selectedFile, subs)=>{
        if(details.length === 1){
            // Check only movue
            if(details.includes(selectedFile.size) ){
                setVerified(true)
                saveMovie(selectedFile)
                setSubs(subs)
            }
            else{
                setVerified(false)
            }
        }else{
            if(details.includes(selectedFile.size) && details.includes(subs?.size)){
                setVerified(true)
                saveMovie(selectedFile.size> subs.size ? selectedFile : subs)
                setSubs(selectedFile.size< subs.size ? selectedFile : subs)
            }
            else{
                setVerified(false)
            }
        }
    }

    const selectFile = (e)=>{
        console.log(e)
        if(e.target.files.length===details.length){
            // console.log(e.target.files)
            const selectedFile = e.target.files[0]
            const subs = e.target.files[1]
            console.log(selectedFile,subs)
            setMovie(selectedFile)
            setUploaded(true)
            checkAndProceed(selectedFile,subs)
        }
        
    }
    if(loading){
        return <div style={styles.section}><Para text="Loading ..." /> </div>
    }
    return (
        <div style={styles.section}> 
            <div style={{paddingTop:"5%", paddingRight:"10%", paddingLeft:"7%"}}>
                <div >
                    <Heading label="Lobby"/>
                </div>
                <div style={{display:'flex'}}>
                    <div style={{maxWidth:"40%", marginTop:"5%"}}>
                        <Para text="Share the link" />
                        <Para text="Your Friends can start by going to the url and uploading the same movie" />
                        <div style={{marginTop:"10%", color:"white", fontFamily:"Montserrat", fontSize:18}}>
                            {window.location.href}
                        </div>
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
