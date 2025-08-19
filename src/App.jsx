
import './App.css'
import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/Main'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
