import React, {useState} from 'react'

export default function Form() {
    const [name, setName] = useState("");
  return (
    <div>
      <input type="text" value={name} 
      onChange={(e) => {
         setName(e.target.value)
      }}/>
      <b>{name}</b>
    </div>
  )
}
