import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/Header'
import Promo from './components/Promo/Promo';
import CharCard from './components/CharCard/CharCard'
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import MyPagination from './components/Pagination/Pagination';
import MyApi from './Api'
import axios from 'axios';


function App() {
  const [chars, setChars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedChars, setDisplayedChars] = useState([]);

  const getChars = () => {
    axios
      .get('https://api.genshin.dev/characters')
      .then((res) => {
        const charPromises = res.data.map((char) =>
          axios.get(`https://api.genshin.dev/characters/${char}`)
        );

        Promise.all(charPromises).then((results) => {
          setChars(results.map((result) => result.data));
          updateDisplayedChars();
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getChars();
    handlePageChange(1);
  }, []);

  const updateDisplayedChars = () => {
    const startIndex = (currentPage - 1) * 6;
    const endIndex = startIndex + 6;
    setDisplayedChars(chars.slice(startIndex, endIndex));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    updateDisplayedChars();
  };

  const lastPage = Math.ceil(chars.length / 6);

  return (
    <div className='App'>
      <Header />
      <Promo />
      <div className='appBody'>
        <main className='gridChar'>
          {displayedChars.map((char, index) => (
            <CharCard key={index} char={char} />
          ))}
        </main>
        <Aside />
        <MyPagination
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          lastPage={lastPage}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;