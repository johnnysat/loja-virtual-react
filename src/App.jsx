import React, {useEffect, useState} from 'react';
import './App.css'
import Header from './components/Header/Header'
import Promo from './components/Promo/Promo';
import CharCard from './components/CharCard/CharCard'
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import MyApi from './Api'
import axios from 'axios';


function App() {
  const [chars, setChars] = useState([])
  useEffect(() => {
    getChars();
  }, [])

  const getChars = () => {
    axios
    .get("https://api.genshin.dev/characters") 
    .then((res) => console.log(res.data) )
    //.then((res) => setChars (res.data) )
    .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      <Header/>
      <Promo />
      <div className="appBody">
        <main className="gridChar">
          {chars.map((char, key) =>( 
          <CharCard key={key} name={char.name} />
          ))}

        </main>
        <Aside/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
