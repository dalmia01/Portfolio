import React from 'react';
import '../css/homecard.scss';
import profile_pic from '../assets/profile_phot_1.jpg';

export const Homecard  = () => {
  return (
    <div className='card__started' id='home_card'>
      <div className='profile'>
        <div className='photo' style={{'backgroundImage':`url(${profile_pic})`,backgroundSize:'cover'}}>
            {/*<img src={profile_pic} />*/}
        </div>
        <div className='home_card_content'>
          <span className='title'>Prateek Dalmia</span>
          <span className='position'>JavaScript Developer</span>
        </div>

        <div className='social_dom'>
          <div  className='social'>
            <span><a href='https://github.com/dalmia01/'><ion-icon name="logo-github"></ion-icon></a></span>
            <span title='dalmia01@gmail.com'><a><ion-icon name="mail" title='dalmia01@gmail.com'></ion-icon></a></span>
            {/*<span><ion-icon name="logo-instagram"></ion-icon></span>*/}
            <span><a href='https://twitter.com/dalmia01'><ion-icon name="logo-twitter"></ion-icon></a></span>
          </div>
        </div>

        <div className='inks'>
            <a href='#' className='download'><span>DOWNLOAD CV</span><ion-icon name="download"></ion-icon></a>
            <a href='#contact_card' className='discover'><span>CONTACT ME</span><ion-icon name="arrow-forward"></ion-icon></a>
        </div>
      </div>
    </div>
  )
}
