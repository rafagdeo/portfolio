import React from 'react';
import cv from '../../assets/rafael-cv.pdf'

const Social = () => {
  return (
    <div className='home__social'>
        <a href="https://www.linkedin.com/in/rafaelgdo/" className="home__social-icon" target="_blank">
            <i class="uil uil-linkedin"></i>
        </a>
        <a href="https://github.com/rafagdeo" className="home__social-icon" target="_blank">
            <i class="uil uil-github"></i>
        </a>
        <a href="https://www.behance.net/rafaeloliveira280" className="home__social-icon" target="_blank">
            <i class="uil uil-behance"></i>
        </a>
        <a href={cv} download="" className="home__social-icon" target="_blank">
            <i class="uil uil-file-download"></i>
        </a>
        
    </div>
  )
};

export default Social