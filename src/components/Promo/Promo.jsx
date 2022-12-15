import React from "react";
import './Promo.css'
import banner from '../../images/Genshin_Impact_Key_Art-EN.jpg'

function Promo(){
  return (
    <section className="promotions">
      <img className="bannerImg" src={banner}/>
    </section>
  )
}

export default Promo;