
import './App.css'
import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import BookContext from './Components/BookContext'
import { Outlet } from 'react-router-dom'
import books from './Components/Books'


function App() {
  return (
    <BookContext.Provider value={books}>
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </BookContext.Provider>
  )
}

export default App
