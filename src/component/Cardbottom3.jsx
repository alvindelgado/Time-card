import React from 'react'
import puntos from "../images/icon-ellipsis.svg"
import '../styles/Cardbottom1.css'
function Cardbottom3() {
  return (
    <div className='Card-bottom'>
        <div>
            <div className='text1'><span>Study</span></div>
            
            <div><img src={puntos} alt="" /></div>
            
        </div>
        <div>
            <span className='text2'>4hrs</span>
            <span className='text3'>Last Week - 7hrs</span>
        </div>
    </div>
  )
}

export {Cardbottom3}