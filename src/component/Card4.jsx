import React from 'react'
import {Cardbottom4} from "./Cardbottom4"
import excersice from "../images/icon-exercise.svg"
import "../styles/Card4.css"
function Card4() {
  return (
    <div className='Card4'>
    <div className='Work-img-exercise'>
        <img src={excersice} alt="" />
    </div>
    <Cardbottom4/>
</div>
  )
}

export {Card4}