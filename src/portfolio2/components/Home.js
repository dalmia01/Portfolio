import React from 'react';
import bg_background from '../assets/gradient-bg.jpg';
import '../css/home.scss';
import Profile from  './Profile';
import Contact from './Contact';

const Home = () =>{

  const [val,setVal] = React.useState(0);

  const changeBlock = (e) =>{
    switch(e) {
      case 0 : setVal(0);break;
      case 1 : setVal(1);break;
      default: setVal(0);break;
    }
  }

  return (
    <div className='home' style={{background:`url(${bg_background}) #333 40% 40%`}}>
      <div className='gradient_overlay1 opacity7'></div>
      <div className='all_blocks'>
        <div className='name_blocks'>
          <h4>
            <span>Hi, I'm</span>
          </h4>
          <h2>Prateek Dalmia</h2>
          <h3>JavaScript Developer</h3>
          <a>Download Resume<ion-icon name="cloud-download"></ion-icon></a>
        </div>
        <div className='item_blocks'>
          <div className='inline_menu'>
            <span>I am available for freelance</span>
            <ul>
              <li onClick={() => changeBlock(0)}>Resume</li>
              <li onClick={() => changeBlock(1)}>Contact</li>
              {/*<li><ion-icon name="close-outline"></ion-icon></li>*/}
            </ul>
          </div>

          {val == 0 ? <Profile /> : null}
          {val == 1 ? <Contact /> : null}

        </div>
      </div>
    </div>
  )
}

export default Home;
