import React, {useEffect, useState} from 'react'

export default function UseEffectHook() {

    //useEffect(()=>{})
    //useEffect(()=>{}, [])
    //useEffect(()=>{}, [1, 2, 3])

    const [n, setN] = useState(1)
    useEffect(()=>{
        setN(n)
    }, [n])
  return (
    <div>
      <h1>{n}</h1>
    </div>
  )
}
