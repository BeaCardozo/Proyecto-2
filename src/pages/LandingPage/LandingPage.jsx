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
  const setSearchKey = props.searchKey
  const movieFinder = props.finder


  

  

  return (
    <div className="main">
      <Hero hero={HeroData}/>
      <section className='movies-section'>
      <div className="container-form">
        <Title title="Cartelera"/>
          <form className="form" onSubmit={movieFinder} >
            <input type="text" placeholder="search" onChange={(e) => setSearchKey(e.target.value)}/>
            <button className ="blue-btn">Buscar</button>
          </form>
      </div>
        <div className="cards-container">
          {Now_playing.map((movie)=>(
              <Card id={movie.id} title={movie.title} language={movie.original_language} popularity={movie.popularity} genres={movie.genre_ids} poster={movie.poster_path} released={true}/>
          ))}
        </div>
      </section>

      <section className='next_releases-section'>
        <Title title="Próximos Estrenos"/>
         <div className="cards-container">
         {Upcoming.map((movie)=>(
              <Card id={movie.id} title={movie.title} language={movie.original_language} popularity={movie.popularity} genres={movie.genre_ids} poster={movie.poster_path} released={false}/>
          ))}
        </div>
      </section>
    </div>
  )
}


export default LandingPage;

