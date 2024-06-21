import React, {useState} from 'react'

export default function Toggle() {
    const [show, setShow] = useState(true)
  return (
    <div>
      <h1>Show, Hide and Toggle</h1>
      {show?  <div style={{
        height:150,
        width:150,
        background:"green",
        marginLeft:"550px",
      }}>
      </div> : null }
     <br/><br/>
      <button onClick={()=> {setShow(false)}}>Show</button>
      <button onClick={()=> {setShow(true)}}>Hide</button>
      <button onClick={()=>{setShow(!show)}}>Toggle</button>
    </div>
  )
}
