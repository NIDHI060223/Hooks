import React, {useState} from 'react'

export default function MouseMove() {

    const [position, setPosition] = useState({x:0, y:0})

    window.addEventListener("mousemove", 
    (e)=>{
       setPosition({x:e.clientX, y:e.clientY})
    })

  return (
    <div style={{
        height: 20,
        width: "20px",
        background: '#000',
        borderRadius: '50%', 
        transform: `translate(${position.x}px, ${position.y}px)`,
        position: 'absolute',
        top:-10,
        left:-12
    }}>
      
    </div>
  )
}
