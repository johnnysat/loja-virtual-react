import React from "react";
import './Promo.css'
import banner from '../../images/Genshin_Impact_Key_Art-EN.jpg'

function Promo(){
  return (
    <section className="promotions">
      <h1>Genshin Impact</h1>
      <img src={banner}/>
    </section>
  )
}

export default Promo;