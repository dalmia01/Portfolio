import React from 'react';

export const Sidebar = props =>{
  return (
    <nav className='sidenavbar'>
      <div className='links'>Home</div>
      <div className='links'>About Me</div>
      <div className='links'>Experience</div>
      <div className='links'>Skills</div>      
      <div className='links'>Education</div>
      <div className='links'>Contact</div>
      <div className='portfolio3_info'>
        <b>Prateek Dalmia</b>
        <span>New Delhi, India</span>
        <b>+91 97 11 137485</b>
        <span>dalmia01@gmail.com</span>
        <b>github.com/dalmia01</b>
      </div>
      <div className='portfolio3_social_links'>

      </div>
    </nav>
  );
}
