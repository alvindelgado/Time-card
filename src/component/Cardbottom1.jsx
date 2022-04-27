import React from 'react'
import puntos from "../images/icon-ellipsis.svg"
import '../styles/Cardbottom1.css'
function Cardbottom1() {
  return (
    <div className='Card-bottom'>
        <div>
            <div className='text1'><span>Work</span></div>
            
            <div><img src={puntos} alt="" /></div>
            
        </div>
        <div>
            <span className='text2'>32hrs</span>
            <span className='text3'>Last Week - 36hrs</span>
        </div>
    </div>
  )
}

export {Cardbottom1}