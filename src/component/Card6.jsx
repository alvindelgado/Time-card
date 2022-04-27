import React from 'react'
import {Cardbottom6} from "./Cardbottom6"
import self from "../images/icon-self-care.svg"
import "../styles/Card6.css"
function Card6() {
  return (
    <div className='Card6'>
    <div className='Work-img'>
        <img src={self} alt="" />
    </div>
    <Cardbottom6/>
</div>
  )
}

export {Card6}