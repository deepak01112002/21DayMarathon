import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topup from './Components/Topup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pop over</h1>
      <Topup/>
    </>
  )
}

export default App
