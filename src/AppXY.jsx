import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [x,setX] = useState(-15);
  const [y,setY] = useState(-15);
  const handleChange = (event)=>{
    setX(event.clientX);
    setY(event.clientY);
  }

  return (
    <div className='container' onMouseMove={handleChange}>
      <div className='pointer' style={{left:`${x}px`,top:`${y}px`}}/>
    </div>
  );
}
