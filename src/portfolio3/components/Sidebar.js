import React from 'react';

export const Sidebar = props =>{

  let [elemVal,setElemVal] = React.useState(0);

  const moveToElement = (elem,elVal) => {
    setElemVal(elVal);
    var element = document.getElementById(`${elem}`);
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
  }

  const scrollToTop = (scrollDuration) => {
       var scrollStep = -window.scrollY / (scrollDuration / 15),
         scrollInterval = setInterval(function(){
         if ( window.scrollY != 0 ) {
             window.scrollBy( 0, scrollStep );
         }
         else clearInterval(scrollInterval);
      },15);
      setElemVal(0);
    }


  return (
    <nav className='sidenavbar'>
      <div className='links' style={{color : elemVal== 0 ? '#ce0f3d' : '#333' }} onClick={() => moveToElement('port3_home',0)}>Home</div>
      <div className='links' style={{color : elemVal== 1 ? '#ce0f3d' : '#333' }} onClick={() => moveToElement('port3_about',1)}>About Me</div>
      <div className='links' style={{color : elemVal== 2 ? '#ce0f3d' : '#333' }} onClick={() => moveToElement('port3_experience',2)}>Experience</div>
      <div className='links' style={{color : elemVal== 3 ? '#ce0f3d' : '#333' }} onClick={() => moveToElement('port3_skills',3)}>Skills</div>
      <div className='links' style={{color : elemVal== 4 ? '#ce0f3d' : '#333' }} onClick={() => moveToElement('port3_education',4)}>Education</div>
      <div className='links' style={{color : elemVal== 5 ? '#ce0f3d' : '#333' }} onClick={() => moveToElement('port3_contact',5)}>Contact</div>
      <div className='portfolio3_info'>
        <b>Prateek Dalmia</b>
        <span>New Delhi, India</span>
        <b>+91 97 11 137485</b>
        <span>dalmia01@gmail.com</span>
        <b>github.com/dalmia01</b>
      </div>
      <div className='portfolio3_social_links'>

      </div>
      <div className='movetToTop' onClick={() => scrollToTop(1000)}></div>
    </nav>
  );
}
