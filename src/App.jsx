import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import Feature from './Components/Feature/Feature'
import './index.css'
function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Hero/>
      <Feature/>
    </BrowserRouter>
    
  )
}

export default App
