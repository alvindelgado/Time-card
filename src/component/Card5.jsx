import React from 'react'
import {Cardbottom5} from "./Cardbottom5"
import social from "../images/icon-social.svg"
import "../styles/Card5.css"
function Card5() {
  return (
    <div className='Card5'>
    <div className='Work-img'>
        <img src={social} alt="" />
    </div>
    <Cardbottom5/>
</div>
  )
}

export {Card5}