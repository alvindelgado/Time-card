import React from 'react'
import {CardReportTop} from "./CardReportTop"
import "../styles/CardReport.css"

function CardReport() {
  return (
    <div className='Cardreport'>
      <CardReportTop/>
    
    <div className='bottom'>
      <span>Daily</span>
      <span>Weekly</span>
      <span>Monthly</span>
    </div>
    </div>
  )
}

export {CardReport}