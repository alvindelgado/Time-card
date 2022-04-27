import React from 'react'
import {Cardbottom2} from "./Cardbottom2"
import play from "../images/icon-play.svg"
import "../styles/Card2.css"
function Card2() {
  return (
    <div className='Card2'>
    <div className='Work-img'>
        <img src={play} alt="" />
    </div>
    <Cardbottom2/>
</div>
  )
}

export {Card2}