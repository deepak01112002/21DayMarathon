import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Accordion from './Components/Accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{width : "80%",margin : "auto",border : "1px solid red",textAlign : 'center'}}>
       <Accordion/>
    </div>
  )
}

export default App
