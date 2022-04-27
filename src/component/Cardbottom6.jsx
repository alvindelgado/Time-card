import React from 'react'
import puntos from "../images/icon-ellipsis.svg"
import '../styles/Cardbottom6.css'
function Cardbottom6() {
  return (
    <div className='Card-bottom-6'>
        <div>
            <div className='text1'><span>Self Care</span></div>
            
            <div><img src={puntos} alt="" /></div>
            
        </div>
        <div>
            <span className='text2'>2hrs</span>
            <span className='text3'>Last Week - 2hrs</span>
        </div>
    </div>
  )
}

export {Cardbottom6}