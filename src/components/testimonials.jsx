import award1 from './images/award1.jpg';
import award2 from './images/award2.png';
import award3 from './images/award3.png';
import award4 from './images/award4.jpg';
import award5 from './images/award5.jpg';
import {Carousel} from '3d-react-carousal';
import React from 'react';
import './testimonials.css';

let slides = [
<a href = "https://www.thenational.ae/business/technology/uae-students-focused-on-finding-workable-uses-for-drones-1.249520" target="_blank" rel="noopener noreferrer"><img  src={award1} alt="1" /></a>,
<a href = "http://www.yaleaders.org/event/ymp-graduates-first-cohort/" target="_blank" rel="noopener noreferrer"><img  src={award2} alt="2" /></a> ,
<a href = "https://futurism.com/these-are-the-top-20-finalists-for-the-drones-for-good-1m-prize" target="_blank" rel="noopener noreferrer"><img  src={award3} alt="3" /> </a>,
<a href = "https://universe.bits-pilani.ac.in/dubai/udaya/HONORS" target="_blank" rel="noopener noreferrer"><img  src={award4} alt="1" /></a>,
<a href = "https://www.educationworld.in/yashaan-cooper/" target="_blank" rel="noopener noreferrer"><img  src={award5} alt="2" /></a>   ];


export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Achievements</h2>
        </div>
       <center>We are just getting started</center>
        <br/>
        <Carousel slides={slides} autoplay={true} interval={5000}/>
        <br/>
      </div>
    </div>
  )
}
