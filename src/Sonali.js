import React from 'react'
import { Heading,  Para,  Mobile, Desktop, BigScreen } from "./components/index";
import Post_1 from './assests/Others/Post_1.png'
import Post_2 from './assests/Others/Post_2.png'
import Post_3 from './assests/Others/Post_3.png'
import Post_4 from './assests/Others/Post_4.png'
import meme from './assests/Others/meme.jpg'


import Cover_art from './assests/Cover_Art.jpg'


function Sonali() {
    return (
        <div style={{height:"100vh", width:"100vw", display:'flex', justifyContent:'center', overflowY:'scroll'}}>
            <div style={{width:"80%",color:"white"}}>
                {/* Cover art */}
                <Desktop>
                    <div style={{textAlign:"center"}}>
                        <img src={Cover_art} width="50%" alt="Cover" />
                    </div>
                </Desktop>
                <BigScreen>
                    <div style={{textAlign:"center"}}>
                        <img src={Cover_art} width="50%" alt="Cover" />
                    </div>
                </BigScreen>
                <Mobile>
                    <div style={{textAlign:"center"}}>
                        <img src={Cover_art} width="69%" alt="Cover" />
                    </div>
                </Mobile>
                <div style={{marginTop:"5%"}}>
                    <Heading label="Hey, Sonali" />
                </div>
                <div>
                    <Para text="So, this is a special webpage designed for you. As you hold a special place in my heart and in my life. So, here you are holding a special place in my digital life." />
                    <Para text="I had thought of this special page for a long time, but its finally here. It contains our photos, my feelings and most importantly my love for you. " />
                    <Para text="So, let me just say this at the beginning:"/>
                    <div style={{marginTop:"5%", display:'flex', justifyContent:'center'}}>
                        <Heading label="I Love You !"/>
                    </div>
                    <Para text="With that out of the way, lets start our journey and Welcome to my personal thoughts..." />
                </div>
                <div style={{marginTop:"5%"}}>
                    <Heading label="How, we met..." />
                </div>
                <div>
                    <Para text="You know how it all started. I started liking you in just 1 week! In just one week. Yeah, I was a lot less crazier for you then. But now, I'm much much much (much ..) more crazier for you. " />
                    <Para text="I just wanted to thank you for flirting with me. Thank you for accepting me, thank you for making me fall in love with you. Although we had difficulties but we managed to get past them." />
                    <Para text="It was all because of you wanted to make it work and me trying to give me the best you deserve. I miss those long talks in hostel and me comming smiling in my room. Hope you feel the same." />
                </div>
                <div style={{marginTop:"5%"}}>
                    <Heading label="When I fall in love with you again.." />
                </div>
                <div>
                    <Para text="When you came to Chennai, I fall for you again and I will be grateful for that forever my life and obviously, those 3 days were THE BEST DAYS." />
                    <Para text="So here's some Photo-Caption things I wanted to do with our photos but didn't got to do..." />
                    <Para text="(I thought a lot about how I should present these photos. Then I came up with something. I hope you get the idea behind this)" css={{fontSize:14, marginTop:"2%"}}/>
                </div>
                <BigScreen>
                <div style={{marginTop:"5%", display:'flex', justifyContent:'space-between'}}>
                        <img src={Post_1} alt="Post 1" />
                        <img src={Post_2} alt="Post 2" />
                    </div>
                    <div style={{marginTop:"5%", display:'flex', justifyContent:'space-between'}}>
                        <img src={Post_3} alt="Post 3" />
                        <img src={Post_4} alt="Post 4" />
                    </div>
                </BigScreen>
                <Desktop>
                    <div style={{marginTop:"5%", display:'flex', justifyContent:'space-between'}}>
                        <img src={Post_1} alt="Post 1" />
                        <img src={Post_2} alt="Post 2" />
                    </div>
                    <div style={{marginTop:"5%", display:'flex', justifyContent:'space-between'}}>
                        <img src={Post_3} alt="Post 3" />
                        <img src={Post_4} alt="Post 4" />
                    </div>
                </Desktop>
                <Mobile>
                <img src={Post_1} alt="Post 1" width="100%"/>
                <img src={Post_2} alt="Post 2" width="100%"/>
                <img src={Post_3} alt="Post 3" width="100%"/>
                <img src={Post_4} alt="Post 4" width="100%"/>
                </Mobile>
                <div style={{marginTop:"5%"}}>
                    <Heading label="The, one year .." />
                </div>
                <div>
                    <Para text="One year, or 365 days and what not. Many things changed, COVID happened, colleges closed, many breakups happened. But we grew more stronger" />
                    <Para text="We made this happen and will continue to make this happen. Let's take this a lot forward and again visit this page to see our past. Our beautiful past" />
                    <Para text="As time goes on, I will add more sections as we add more chapters to our relationships. Hope you liked it. Cause IDK anything else to do...lol"/>
                </div>
                <Desktop>
                    <div style={{marginTop:"5%", display:'flex',justifyContent:"space-between", alignItems:"center"}}>
                        <img src={meme} alt="Meme" />
                        <div>
                            <Para text="Yours and yours only," />
                            <div style={{marginTop:"7%"}}>
                                <Heading label="Apoorv Kansal" />
                            </div>
                        </div>
                    </div>
                </Desktop>
                <BigScreen>
                    <div style={{marginTop:"5%", display:'flex',justifyContent:"space-between", alignItems:"center"}}>
                        <img src={meme} alt="Meme" />
                        <div>
                            <Para text="Yours and yours only," />
                            <div style={{marginTop:"7%"}}>
                                <Heading label="Apoorv Kansal" />
                            </div>
                        </div>
                    </div>
                </BigScreen>
                <Mobile>
                <div style={{marginTop:"5%", display:'flex',justifyContent:"space-between", alignItems:"center", flexDirection:'column'}}>
                    <img src={meme} alt="Meme" width="60%" />
                    <div>
                        <Para text="Yours and yours only," />
                        <div style={{marginTop:"7%"}}>
                            <Heading label="Apoorv Kansal" />
                        </div>
                    </div>
                </div>
                </Mobile>
                <div style={{height:"10%"}}>

                </div>
            </div>
        </div>
    )
}

export default Sonali
