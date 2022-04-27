import React from 'react'
import puntos from "../images/icon-ellipsis.svg"
import '../styles/Cardbottom5.css'
function Cardbottom5() {
  return (
    <div className='Card-bottom-5'>
        <div>
            <div className='text1'><span>Social</span></div>
            
            <div><img src={puntos} alt="" /></div>
            
        </div>
        <div>
            <span className='text2'>5hrs</span>
            <span className='text3'>Last Week - 10hrs</span>
        </div>
    </div>
  )
}

export {Cardbottom5}