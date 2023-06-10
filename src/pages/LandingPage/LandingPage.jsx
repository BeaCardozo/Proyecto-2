import React from "react";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import Hero from "../../components/Hero/Hero";
import { HeroData } from '../../components/Hero/HeroData';
import "../../App.css"
import "../../components/Login/Login.css"


function LandingPage() {
  return (
    <div className="main">
      <Hero hero={HeroData}/>
      <section className='movies-section'>
      <div className="container-form">
        <Title title="Cartelera"/>
          <form className ="form" action="">
            <input placeholder="Busca tu película favorita"/>
            <button className ="blue-btn">Buscar</button>
          </form>
        </div>
        <div className="cards-container">
            <Card/>
            <Card/>
            <Card/>
        </div>
      </section>

      <section className='next_releases-section'>
        <Title title="Próximos Estrenos"/>
         <div className="cards-container">
            <Card/>
            <Card/>
            <Card/>
        </div>
      </section>
    </div>
  )
}


export default LandingPage;

