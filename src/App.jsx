import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { About } from './components/about'
import { Services } from './components/services'
import { Testimonials } from './components/testimonials'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import ScrollButton from './components/ScrollButton/ScrollButton';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Header data={landingPageData.Header} />
     
      <About data={landingPageData.About} />
      {/* <Features data={landingPageData.Features} /> */}
      <Services data={landingPageData.Services} />
      {/* <Gallery /> */}
      <Testimonials data={landingPageData.Testimonials} />
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
      <ScrollButton />
    </div>
   
  )
}

export default App