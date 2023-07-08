import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Skills from './components/skills/Skills';
import About from './components/About/About';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
      </main>
    </>
  )
}

export default App
