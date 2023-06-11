import React, { useState } from 'react'
import dan from "../../images/dan.PNG"
import "./intro.css"
function Intro(){
    return(
        <div className="intro">
           <div className="intro-left"><span className='span'>MAKE YOUR </span> <span>LIFE EASY</span></div>
           <div className="intro-right" ><h1>DAN ENERY</h1>
            <img src={dan} className='image'></img>
            </div>
            
        </div>
    )
}

export default  Intro