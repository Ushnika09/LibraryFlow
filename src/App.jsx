import './App.css'
import React, { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
import Initialbooks from './Components/Books'
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  const [books, setBooks] = useState(Initialbooks);
  return (
    <Provider store={store}>
      {/* <BookContext.Provider value={{books, setBooks}}> */}
        <Header/>
        <Outlet/>
        <Footer/>
      {/* </BookContext.Provider> */}
    </Provider>
  )
}

export default App
