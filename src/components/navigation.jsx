import Img from './images/Untitled-2.png';

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' style = {{margin: '0px 0px 30px 0px'}} href='#page-top'>
          <img src = {Img} style = {{width: '60px' , height : 'auto'}} alt =''/>
          </a>
          {' '}
         
        </div>

        <div
          className='collapse navbar-collapse' 
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            {/* <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li> */}
            <li>
              <a href='#about' style = {{margin: '20px 0px 0px 0px'}} className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' style = {{margin: '20px 0px 0px 0px'}} className='page-scroll'>
                Services
              </a>
            </li>
            {/* <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li> */}
            <li>
              <a href='#testimonials' style = {{margin: '20px 0px 0px 0px'}} className='page-scroll'>
                Achievements
              </a>
            </li>
            {/* <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li> */}
            <li>
              <a href='#contact' style = {{margin: '20px 0px 0px 0px'}} className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
