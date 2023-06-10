import React from "react";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import Hero from "../../components/Hero/Hero";
import { HeroData } from '../../components/Hero/HeroData';
import "../../App.css"
import "../../components/Login/Login.css"


const LandingPage = (props) => {
  const Now_playing = props.Now_playing;
  const Upcoming = props.Upcoming;
  
  return (
    <div className="main">
      <Hero hero={HeroData}/>
      <section className='movies-section'>
      <div className="container-form">
        <Title title="Cartelera"/>
          <form className ="form" action="">
            <input type="text" placeholder="Busca tu película favorita"/>
            <button className ="blue-btn">Buscar</button>
          </form>
        </div>
        <div className="cards-container">
          {Now_playing.map((movie)=>(
              <Card title={movie.title} language={movie.original_language} popularity={movie.popularity} genres={movie.genres} poster={movie.poster_path}/>
          ))}
        </div>
      </section>

      <section className='next_releases-section'>
        <Title title="Próximos Estrenos"/>
         <div className="cards-container">
         {Upcoming.map((movie)=>(
              <Card title={movie.title} language={movie.original_language} popularity={movie.popularity} genres={movie.genres} poster={movie.poster_path}/>
          ))}
        </div>
      </section>
    </div>
  )
}


export default LandingPage;


/* <div className="main">
      <Hero hero={HeroData}/>
      
      <section className='movies-section'>
      <div className="container-form">
        <Title title="Cartelera"/>
          <form className ="form" action="">
            <input type="text" placeholder="Busca tu película favorita"/>
            <button className ="blue-btn">Buscar</button>
          </form>
        </div>
        <div className="cards-container">
          {Now_Playing.map((movie)=>(
              <Card title={movie.title} language={movie.original_language} popularity={movie.popularity} genres={movie.genres} poster={movie.poster_path}/>
          ))}
        </div>
      </section>

      <section className='next_releases-section'>
        <Title title="Próximos Estrenos"/>
         <div className="cards-container">
         {Upcoming.map((movie)=>(
              <Card title={movie.title} language={movie.original_language} popularity={movie.popularity} genres={movie.genres} poster={movie.poster_path}/>
          ))}
        </div>
      </section>
    </div>*/

