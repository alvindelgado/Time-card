import React from 'react'
import {Cardbottom1} from "./Cardbottom1"
import maleta from "../images/icon-work.svg"
import "../styles/Card1.css"
function Card1() {
  return (
    <div className='Card1'>
        <div className='Work-img'>
            <img src={maleta} alt="" />
        </div>
        <Cardbottom1/>
    </div>
  )
}

export {Card1}