import React from 'react'
import puntos from "../images/icon-ellipsis.svg"
import '../styles/Cardbottom1.css'
function Cardbottom2() {
  return (
    <div className='Card-bottom'>
        <div>
            <div className='text1'><span>Play</span></div>
            
            <div><img src={puntos} alt="" /></div>
            
        </div>
        <div>
            <span className='text2'>10hrs</span>
            <span className='text3'>Last Week - 8hrs</span>
        </div>
    </div>
  )
}

export {Cardbottom2}