import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Index from './component/Index'
import Resume from './component/Resume'

export default function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      <Index/>
      <Resume/>
    </div>
  )
}
