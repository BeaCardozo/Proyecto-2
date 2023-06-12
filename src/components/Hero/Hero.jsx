import React, { useState } from 'react';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import { HeroData } from './HeroData';
import "./Hero.css";


const Hero = ({hero}) =>{
    const [current, setCurrent] = useState(0);
    const length = hero.length;

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if(!Array.isArray(hero) || hero.length <= 0){
        return null;
    }

    return(
        <section className='hero-container'>
            <FaArrowLeft className='left_arrow' onClick={prevSlide}/>
            <FaArrowRight className='right_arrow' onClick={nextSlide}/>
            {HeroData.map((hero,index) => {
                return(
                    <div className={index=== current? 'slide active' : 'slide'} key={index}>
                    {index === current && ( <img src={hero.image} alt='image' className='image-slider'/>)}
                    </div>
                ) 
            })}

        </section>
        
    )
}


export default Hero;