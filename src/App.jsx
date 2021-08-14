import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
// import { Header } from './components/header'
import { Gallery } from './components/gallery'
import { About } from './components/about'
import { Services } from './components/services'
import { Testimonials } from './components/testimonials'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import ScrollButton from './components/ScrollButton/ScrollButton';
import React from 'react';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
// import { MainCarousel } from './components/MainCarousel'
import './App.css';



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      {/* <Header data={landingPageData.Header} /> */}
      {/* <Headerr/> */}
      <ImageSlider slides={SliderData} />
      {/* <MainCarousel/> */}
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Gallery />
      <Contact data={landingPageData.Contact} />
      <ScrollButton />
    </div>  
  )
}

export default App
