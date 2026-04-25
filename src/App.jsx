import React from 'react'
import Navbar from './components/Navbar.jsx'

export default function App() {
  return (
    <div style={{width:"100%",marginInline:"auto",border:"1px solid black"}}>
      <Navbar name="Anvar"/>
      <Navbar age="22"/>
      <Navbar name="Jonibek"/>
      <Navbar age="55"/>
    </div>
  )
}
