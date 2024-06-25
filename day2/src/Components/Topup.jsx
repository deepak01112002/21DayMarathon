import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import './Topup.css'

function Topup() {
    const [isvalid , setValid] = useState(false)
    const itemref = useRef()
    const clearData = (event)=>{
      if(itemref.current && !itemref.current.contains(event.target)){
        setValid(false) 
      }
    }
    const togglePop = ()=>{
        setValid(!isvalid)
    }
    useEffect(()=>{
        if(isvalid){
            document.addEventListener("mousedown",clearData)
        }else{
            document.removeEventListener("mousedown",clearData)
        }
        return ()=>{
            document.removeEventListener("mousedown",clearData)
        }
    },[isvalid])
  return (
    <>
       <div className='popover-container' onClick={togglePop}>
           Hover on Me !!!!
       </div>
       {isvalid && <div className='popover-content' ref={itemref}>
            Popover hu mai !!!!!
       </div>}
    </>
  )
}

export default Topup