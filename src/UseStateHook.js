import React, { useState } from 'react'

export default function UseStateHook() {

    let x =23;
    let y = [34, 100, 56]
    const [num, setNum] = useState(x);
    const [str, setStr] = useState("Hi");
    const [arr, setArr] = useState(y);
    const [obj, setObj] = useState({name:"nidhi", age:26})
  return (
    <div>
      <h1 onClick={()=>{setNum(100)}}>{num}</h1>
      <h2 onClick={()=>{setStr("Bye")}}>{str}</h2>
      <div>
        <li>{arr[0]}</li>
        <li>{arr[1]}</li>
        <li>{arr[2]}</li>
        <button onClick={()=>{setArr([9, 65, 89])}}>Array</button>
      </div>
      <div>
        <li>{obj.name}</li>
        <li>{obj.age}</li>
        <button onClick={()=>{
            setObj({name:"Nidhi123", age: 23})
        }}>Object</button>
      </div>
    </div>
  )
}
