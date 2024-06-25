import { useState } from 'react'
import './App.css'

function App() {
  const [rating, setRating] = useState(0);
  const [arr,setArr] = useState([0,0,0,0,0])
  const handleClick =(data)=>{
    setRating(data)
  }

  return (
    <div className='data'>
      {
        arr.map((el,index)=>{
          return <span key={index} onClick={()=>handleClick(index+1)} className={index < rating ? "star selected" : "star"}>★</span>
        })
      }
    </div>
  )
}

export default App
