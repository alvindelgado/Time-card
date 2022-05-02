import React from 'react'
import puntos from "../images/icon-ellipsis.svg"
import '../styles/Cardbottom1.css'
function Cardbottom1(props) {
  const hobby=props.hobby
  const hour=props.hour
  const last=props.last
  return (
    <div className='Card-bottom'>
        <div>
            <div className='text1'><span>{hobby}</span></div>
            
            <div><img src={puntos} alt="" /></div>
            
        </div>
        <div>
            <span className='text2'>{hour}</span>
            <span className='text3'>{`Last Week - ${last}`}</span>
        </div>
    </div>
  )
}

export {Cardbottom1}