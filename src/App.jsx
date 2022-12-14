import React from 'react';
import './App.css'
import Header from './components/Header/Header'
import Promo from './components/Promo/Promo';
import CharGrid from './components/CharGrid/CharGrid'

function App() {

  return (
    <div className="App">
      <Header/>
      <Promo />
      <CharGrid />
    </div>
  )
}

export default App
