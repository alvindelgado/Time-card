import React from 'react'
import puntos from "../images/icon-ellipsis.svg"
import '../styles/Cardbottom4.css'
function Cardbottom4() {
  return (
    <div className='Card-bottom-4'>
        <div>
            <div className='text1'><span>Excercise</span></div>
            
            <div><img src={puntos} alt="" /></div>
            
        </div>
        <div>
            <span className='text2'>4hrs</span>
            <span className='text3'>Last Week - 5hrs</span>
        </div>
    </div>
  )
}

export {Cardbottom4}