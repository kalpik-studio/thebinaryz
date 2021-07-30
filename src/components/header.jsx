import Img from "./images/whitebinaryz.png";
import React from 'react';

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
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
