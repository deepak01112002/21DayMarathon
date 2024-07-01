import React, { useEffect, useState } from 'react'
import Style from "./SimpleCarousle.module.css"
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
function SimpleCarousels({image}) {

  const [index,setIndex] = useState(0)
  const handlePrev = ()=>{
    if(index>0){
      setIndex((prev)=>prev - 1)
    }else{
      setIndex(image.length-1)
    }
  }

  const handleNext = ()=>{
    if(index==image.length-1){
      setIndex(0)
    }else{
      setIndex((prev)=>prev + 1)
    }
  }
  
  useEffect(()=>{
     let d = setInterval(()=>{
        if(index == image.length-1){
          setIndex(0)
        }else{
          setIndex(prev => prev + 1)
        }
     },2000)
     return ()=>{
         clearInterval(d)
     }
  },[index,image])
  
  return (
    <div style={{width : "100vw"}}>
        <button className={Style.prev} onClick={handlePrev}>
        <SlArrowLeft/>
        </button>
        <img src={image[index]} alt="" width="100%" />
      <div className={Style.check}>
        <input type="radio" onClick={()=>setIndex(0)} className={index == 0 ? Style.checked: ""} checked={index == 0} />
        <input type="radio" onClick={()=>setIndex(1)} className={index == 1 ? Style.checked: ""} checked={index == 1} />
        <input type="radio" onClick={()=>setIndex(2)} className={index == 2 ? Style.checked: ""} checked={index == 2} />
        <input type="radio" onClick={()=>setIndex(3)} className={index == 3 ? Style.checked: ""} checked={index == 3} />
        <input type="radio" onClick={()=>setIndex(4)} className={index == 4 ? Style.checked: ""} checked={index == 4} />
        <input type="radio" onClick={()=>setIndex(5)} className={index == 5 ? Style.checked: ""} checked={index == 5} />
      </div>  
        <button className={Style.next} onClick={handleNext}>
        <SlArrowRight />
        </button>
    </div>
  )
}

export default SimpleCarousels