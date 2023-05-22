import React from 'react'
import NavBar from './components/NavBar/NavBar';
import Hero from "./components/Hero/Hero"
import Produto from "./components/Produto/Produto"
import Teste from './components/Teste/Teste';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Produto/>
      <Teste/>
    </div>
  )
}

export default App