
import './App.css'
import React, { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import BookContext from './Components/BookContext'
import { Outlet } from 'react-router-dom'
import Initialbooks from './Components/Books'




function App() {
  const [books, setBooks] = useState(Initialbooks);
  return (
    <BookContext.Provider value={{books, setBooks}}>
    
      <Header/>
      <Outlet/>
      <Footer/>
    </BookContext.Provider>
  )
}

export default App
