import React from 'react';
import './App.css'
import Header from './components/Header/Header'
import Promo from './components/Promo/Promo';
import CharCard from './components/CharCard/CharCard'
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <Header/>
      <Promo />
      <body className="appBody">
        <main className="gridChar">
          <CharCard />
          <CharCard />
          <CharCard />
          <CharCard />
          <CharCard />
          <CharCard />
        </main>
        <Aside/>
      </body>
      <Footer/>
    </div>
  )
}

export default App
