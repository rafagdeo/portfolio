import React from 'react';
import "./about.css";
import AboutImg from "../../assets/me-contratem-pf.webp";
import Info from "./Info";


const About = () => {
  return (
    <div className="about container" id='about'>
        <h2 className="section__title">About me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
        <img src={AboutImg} alt="" className='about__img'/>
        <div className="about__data">
            <Info />
            <p className="about__description">
            Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.
            </p>
        </div>
        </div>
    </div>
  )
}

export default About