import React from 'react'
import {Cardbottom3} from "./Cardbottom3"
import book from "../images/icon-study.svg"
import "../styles/Card3.css"
function Card3() {
  return (
    <div className='Card3'>
    <div className='Work-img'>
        <img src={book} alt="" />
    </div>
    <Cardbottom3/>
</div>
  )
}

export {Card3}