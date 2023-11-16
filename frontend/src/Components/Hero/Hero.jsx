import React from 'react'
import './Hero.css';
import fly_icon from '../Assets/fly_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'


const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>New Arrivals</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Classic</p>
                    <img src={fly_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for every woman</p>
                
            </div>
            <div className="hero-latest-btn">
                <div>latest Collections</div>
                <img src={arrow_icon} alt="" />

            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" />
        </div>

    </div>
  )
}

export default Hero