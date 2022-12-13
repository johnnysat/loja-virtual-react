import React from "react";
import './Promo.css'
import banner from '../../images/Genshin_Impact_Key_Art-EN.jpg'

function Promo(){
  return (
    <section className="promotions">
      <img src={banner}/>
    </section>
  )
}

export default Promo;