import React from 'react'
import {Cardbottom1} from "./Cardbottom1"
import maleta from "../images/icon-work.svg"
import "../styles/Card1.css"
function Card1(props) {
 const hobby=props.hobby
 const hour=props.hour
 const last=props.last
 const theme='Card1 ' + props.theme
 const imagenes=props.imagenes 
  return (
    <div className={theme}>
        <div className='Work-img'>
            <img src={imagenes} alt="" />
        </div>
        <Cardbottom1 hobby = {hobby} hour={hour} last={last}/>
    </div>
  )
}

export {Card1}