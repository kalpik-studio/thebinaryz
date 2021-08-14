import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
// import styled from 'styled-components';
// import Img from './images/whitebinaryz.png';

// const delay = 2500;

// const Titletrial = styled.div`
// width: 50px;
// height: 50px;
// backgroundColor: red;
// fontColor: pink;
// position: absolute;

// `;

// const Logo = styled.img`
// width:50px;
// height: auto;
// backgroundColor: red;
// `;

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >


            {index === current && (
              <img src={slide.image} alt='travel' className='image' />
            )}
            
            {/* <div className='col-md-8 col-md-offset-2 intro-text'>
                <img src = {Img} style = {{ width: '600px', height : 'auto'}} alt= ''/>
                <p style={{color: 'white', fontWeight: 'bold'}}>Hello</p>
                <a
                  href='#about'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div> */}

          </div>
          
        );
      })}
      
    </section>
  );
};

export default ImageSlider;
