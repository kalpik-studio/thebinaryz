// import Carousel from 'react-bootstrap/Carousel';
// import Style from './testimonials.css'
// import Drone from './images/DroneConst2.png';
// import WorldMap from './images/MapMin.jpg';
// import Cyber from './images/cybersec.png';
import award1 from './images/award1.png';
import award2 from './images/award2.png';
import award3 from './images/award3.png';
import {Carousel} from '3d-react-carousal';


let slides = [
  <img  src={award1} alt="1" />,
<img  src={award2} alt="2" />  ,
<img  src={award3} alt="3" />   ];
{/* <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
<img src="https://picsum.photos/800/304/?random" alt="5" />  */}


export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Achievements</h2>
        </div>
        {/* This is our carousal Component:  */}
        <br/>
        <br/>
        <br/>
        <Carousel slides={slides} autoplay={true} interval={5000}/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h3>Testimonials</h3>
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
        </div>
      </div>
    </div>
  )
}
