// import Carousel from 'react-bootstrap/Carousel';
// import Style from './testimonials.css'
// import Drone from './images/DroneConst2.png';
// import WorldMap from './images/MapMin.jpg';
// import Cyber from './images/cybersec.png';
import award1 from './images/award1.jpg';
import award2 from './images/award2.png';
import award3 from './images/award3.png';
import award4 from './images/award4.jpg';
import award5 from './images/award5.jpg';
import {Carousel} from '3d-react-carousal';
// import {
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBCarouselElement,
//   MDBCarouselCaption
// } from 'mdb-react-ui-kit';


let slides = [
<a href = "https://www.thenational.ae/business/technology/uae-students-focused-on-finding-workable-uses-for-drones-1.249520" target="_blank"><img  src={award1} alt="1" /></a>,
<a href = "http://www.yaleaders.org/event/ymp-graduates-first-cohort/" target="_blank"><img  src={award2} alt="2" /></a> ,
<a href = "https://futurism.com/these-are-the-top-20-finalists-for-the-drones-for-good-1m-prize" target="_blank"><img  src={award3} alt="3" /> </a>,
<a href = "https://universe.bits-pilani.ac.in/dubai/udaya/HONORS" target="_blank"><img  src={award4} alt="1" /></a>,
<a href = "https://www.educationworld.in/yashaan-cooper/" target="_blank"><img  src={award5} alt="2" /></a>   ];


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
{/* 
        <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(40).jpg' alt='...' />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel> */}

        {/* <h3>Testimonials</h3>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <div className='testimonial-content'>
                      <p>"{d.text}"</p>
                      <div className='testimonial-meta'> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div> */}
      </div>
    </div>
  )
}
