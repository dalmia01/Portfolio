import React from 'react';
import quote from '../assets/sign.png';
import styled from 'styled-components';
import work1 from '../assets/works1.jpg';
import work2 from '../assets/works2.jpg';
import work3 from '../assets/works3.jpg';
import work4 from '../assets/work4.jpg';
import work5 from '../assets/works5.jpg';
import '../css/About.scss';

export const Works = ()=>{
  return(
    <div className='card__diff_started' id='works_card'>
        <div className='about'>
            <div className='head__title'><span className='first_word'>All</span><span> Works</span></div>
        </div>
        <div className='about_content'>
          <div className='row'>
            <div className='col'>
              <div className='text_box'>
                <a href='https://web-clock-01.netlify.app/' target='_blank'><div class='works_image'>
                  <img src={work4} />
                </div>
                <div>Clock Web App</div></a>
              </div>
              <div className='text_box'>
                <a><div class='works_image'>
                  <img src={work3} />
                </div>
                <div>Mobile Fitness App</div></a>
              </div>
            </div>
            <div className='col'>
            <div className='text_box'>
              <a href='https://articles-apps.herokuapp.com/' target='_blank'><div class='works_image'>
                <img src={work2}  />
              </div>
              <div>Article Responsive App</div></a>
            </div>


            <div className='text_box'>
              <a  target='_blank'><div class='works_image'>
                <img src={work5} />
              </div>
              <div>Portfolio Web App</div></a>
            </div>

            </div>
          </div>
        </div>



    </div>
  )
}
