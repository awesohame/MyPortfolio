import { useState } from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/about' element='About' />
        <Route exact path='/projects' element='Projects' />
        <Route exact path='/skills' element='Skills' />
        <Route exact path='/contact' element='Contact' />
      </Routes>
    </>
  )
}

export default App
