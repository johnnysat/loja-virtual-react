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
  const [chars, setChars] = useState([]);

  const getChars = () => {
    axios
      .get("https://api.genshin.dev/characters")
      .then((res) => {
        const charPromises = res.data.map((char) =>
          axios.get(`https://api.genshin.dev/characters/${char}`)
        );

        Promise.all(charPromises).then((results) => {
          setChars(results.map((result) => result.data));
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getChars();
  }, []);

  return (
    <div className="App">
      <Header />
      <Promo />
      <div className="appBody">
        <main className="gridChar">
          {chars.map((char, index) => (
            <CharCard key={index} char={char} />
          ))}
        </main>
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;