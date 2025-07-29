import React from 'react'
import './Overlay.css'
import { div } from 'framer-motion/client'

export function Overlay ({isOpen, onClose, children}) {

 
  return ( 


    <div className="overlay">
    <div className="overlay-background" onClick={onClose}></div>
    <div className="overlay-container">
      <div className="overlay-controls" onHoover={onClose}>
      </div>
    </div>
  </div>
   
  )
}

export default facilities
