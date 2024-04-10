import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Navbar from './component/Navbar';
import Contactus from './component/Contactus';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>   
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Navbar' element={<Navbar/>}/>
          <Route path='/Home'element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path= '/Signup' element={<Signup/>}/>
          <Route path='/Contactus' element={<Contactus/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

