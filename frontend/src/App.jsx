import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import Login from './component/Login'
import Signup from './component/Signup'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Login' element={<Login/>}/>
          <Route path= 'Signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

