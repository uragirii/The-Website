import React from 'react'
import './SliderDots.css'

function SliderDots({index, length, setIndex}) {

    let dots = [];
    
    for (let i = 0; i < length; i++) {
        dots.push(i===index?(<li className="active" onClick={()=>{setIndex(i)}}></li>):<li onClick={()=>{setIndex(i)}}></li>)      
    }
    return (
        <div>
            <section>
                <ul className="dots">
                    {dots}
                </ul>
            </section>
        </div>
    )
}

export default SliderDots
