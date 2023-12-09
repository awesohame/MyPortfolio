import { useState } from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/about' Component={About} />
        <Route exact path='/projects' Component={Projects} />
        <Route exact path='/skills' Component={Skills} />
        <Route exact path='/contact' element='Contact' />
      </Routes>
    </>
  )
}

export default App
