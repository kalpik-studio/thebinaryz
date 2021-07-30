import Img from "./images/whitebinaryz.png";
import React from 'react';
// import BackgroundSlider from 'react-background-slider';
// import image1 from './images/cybersec.png';
// import image2 from './images/MapMin.jpg';



export const Header = (props) => {
  return (
   
    <header id='header'>
    
      <div className='intro'>
      {/* <BackgroundSlider
    images={[image1, image2]}
    duration={2} transition={2}
    style={{color:"red"}}> 
       </BackgroundSlider>  */}
        <div className='overlay'>
        
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                {/* <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1> */}
                <img src = {Img} style = {{ width: '600px', height : 'auto'}} alt= ''/>
                <p style={{color: 'white', fontWeight: 'bold'}}>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#about'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </header>

    
  )
}


