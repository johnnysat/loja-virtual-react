import React from 'react';
import './App.css'
import Header from './components/Header/Header'
import Promo from './components/Promo/Promo';
import CharCard from './components/CharCard/CharCard'

function App() {

  return (
    <div className="App">
      <Header/>
      <Promo />
      <main className="gridChar">
        <CharCard />
        <CharCard />
        <CharCard />
        <CharCard />
        <CharCard />
        <CharCard />
      </main>
    </div>
  )
}

export default App
