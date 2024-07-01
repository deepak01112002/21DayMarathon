import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleCarousels from './Components/SimpleCarousels'
let image  = ["https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/77dd9045daf65f13.jpg?q=20","https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/54ae867c95cb06e2.jpg?q=20","https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1aaeb0a6531bef88.jpg?q=20","https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/6a496d4c7a27f314.jpg?q=20","https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20","https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d324684a676669a8.jpg?q=20"]
function App() {
  

  return (
    <>
      <h1 style={{textAlign : "center"}}>Carousel From Scratch</h1>
      <SimpleCarousels image={image}/>
    </>
  )
}

export default App
