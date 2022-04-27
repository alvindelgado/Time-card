import React from 'react'
import cara from "../images/image-jeremy.png"
import "../styles/CardReportTop.css"
function CardReportTop() {
  return (
   <div className='reporttop'>
      
        <img src={cara} alt="" />
   
    <div className='letras'>
        <p>Report for</p>
        <p>Jeremy Robson</p>
    </div>
   </div>
    
  )
}

export {CardReportTop}