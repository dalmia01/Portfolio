import React from 'react';
import '../css/navbar.scss';

export const Navbar = ( )=>{

  let [activeIndex,setActiveIndex] = React.useState(0);

  const changeActiveClass = (e) =>{
    setActiveIndex(e);

    if(e== 0){
      document.getElementById('about_card').style.animationName = 'animateIn';
      document.getElementById('about_card').style.animationDuration = '1s';
      document.getElementById('about_card').style.animationFillMode = 'forwards';
      document.getElementById('resume_card').style.animationName = 'animateOut';
      document.getElementById('resume_card').style.animationDuration = '1s';
      document.getElementById('resume_card').style.animationFillMode = 'forwards';
      document.getElementById('works_card').style.animationName = 'animateOut';
      document.getElementById('works_card').style.animationDuration = '1s';
      document.getElementById('works_card').style.animationFillMode = 'forwards';
      document.getElementById('contact_card').style.animationName = 'animateOut';
      document.getElementById('contact_card').style.animationDuration = '1s';
      document.getElementById('contact_card').style.animationFillMode = 'forwards';
    }else
    if(e== 1){
      document.getElementById('about_card').style.animationName = 'animateOut';
      document.getElementById('about_card').style.animationDuration = '1s';
      document.getElementById('about_card').style.animationFillMode = 'forwards';
      document.getElementById('resume_card').style.animationName = 'animateIn';
      document.getElementById('resume_card').style.animationDuration = '1s';
      document.getElementById('resume_card').style.animationFillMode = 'forwards';
      document.getElementById('works_card').style.animationName = 'animateOut';
      document.getElementById('works_card').style.animationDuration = '1s';
      document.getElementById('works_card').style.animationFillMode = 'forwards';
      document.getElementById('contact_card').style.animationName = 'animateOut';
      document.getElementById('contact_card').style.animationDuration = '1s';
      document.getElementById('contact_card').style.animationFillMode = 'forwards';
    }else
    if(e== 2){
      document.getElementById('about_card').style.animationName = 'animateOut';
      document.getElementById('about_card').style.animationDuration = '1s';
      document.getElementById('about_card').style.animationFillMode = 'forwards';
      document.getElementById('resume_card').style.animationName = 'animateOut';
      document.getElementById('resume_card').style.animationDuration = '1s';
      document.getElementById('resume_card').style.animationFillMode = 'forwards';
      document.getElementById('works_card').style.animationName = 'animateIn';
      document.getElementById('works_card').style.animationDuration = '1s';
      document.getElementById('works_card').style.animationFillMode = 'forwards';
      document.getElementById('contact_card').style.animationName = 'animateOut';
      document.getElementById('contact_card').style.animationDuration = '1s';
      document.getElementById('contact_card').style.animationFillMode = 'forwards';
    }else
    if(e== 3){
      document.getElementById('about_card').style.animationName = 'animateOut';
      document.getElementById('about_card').style.animationDuration = '1s';
      document.getElementById('about_card').style.animationFillMode = 'forwards';
      document.getElementById('resume_card').style.animationName = 'animateOut';
      document.getElementById('resume_card').style.animationDuration = '1s';
      document.getElementById('resume_card').style.animationFillMode = 'forwards';
      document.getElementById('works_card').style.animationName = 'animateOut';
      document.getElementById('works_card').style.animationDuration = '1s';
      document.getElementById('works_card').style.animationFillMode = 'forwards';
      document.getElementById('contact_card').style.animationName = 'animateIn';
      document.getElementById('contact_card').style.animationDuration = '1s';
      document.getElementById('contact_card').style.animationFillMode = 'forwards';
    }



  }

  return (
      <nav className='header'>
        <ul className='nav_menu'>
          <li><a className={activeIndex == 0 ? 'active' : null} onClick={()=>changeActiveClass(0)}><span className='link'><i className='fa fa-user'></i><span className='link_content'>About</span><span className='underline'></span></span></a></li>
          <li><a  className={activeIndex == 1 ? 'active' : null} onClick={()=>changeActiveClass(1)}><span className='link'><i className='fa fa-th-list'></i><span className='link_content'>Resume</span><span className='underline'></span></span></a></li>
          <li><a  className={activeIndex == 2 ? 'active' : null} onClick={()=>changeActiveClass(2)}><span className='link'><i className='fa fa-paint-brush'></i><span className='link_content'>Works</span><span className='underline'></span></span></a></li>
          <li><a  className={activeIndex == 3 ? 'active' : null} onClick={()=>changeActiveClass(3)}><span className='link'><i className='fa fa-info'></i><span className='link_content'>Contact</span></span></a></li>
        </ul>
      </nav>
  )
}
