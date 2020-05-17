import React from 'react';
import quote from '../assets/sign.png';
import styled from 'styled-components';
import '../css/About.scss';



export const About = () =>{
  return(
    <div className='card__diff_started' id='about_card'>
        <div className='about'>
            <div className='head__title'><span className='first_word'>About</span><span> Me</span></div>
        </div>
        <div className='about_content'>
          <div className='row'>
            <div className='col'>
              <div className='text_box'>
                I am Prateek Dalmia, javascipt developer from Delhi, India. I have quite some experience in web site design, building and customization. I love to talk with you about us in future.
              </div>
            </div>
            <div className='col'>
              <div className='personnel_info'>
                  <strong className='back_highlight'>Age . . . . .</strong>
                  <span>26</span>
              </div>
              <div className='personnel_info'>
                  <strong className='back_highlight'>Nationality . . . . .</strong>
                  <span>Indian</span>
              </div>
              <div className='personnel_info'>
                  <strong className='back_highlight'>Freelance . . . . .</strong>
                  <span>Available</span>
              </div>
              <div className='personnel_info'>
                  <strong className='back_highlight'>Residence . . . . .</strong>
                  <span>Delhi, India</span>
              </div>
            </div>
          </div>
        </div>
        <div className='about'>
            <div className='head__title'><span className='first_word'>Objective</span></div>
        </div>
        <div className='about_content'>
          <div className='row'>
              <span className='full_text_box' datacustombefore={quote}>
                I am looking for a challenging environment where I can nurture and grow my analytical, database and programming skills to contribute towards the business of the organization by delivering effective solutions in the ever evolving software industry.
              </span>
          </div>
        </div>
        <div className='about'>
            <div className='head__title'><span className='first_word'>Brief</span><span> Skills</span></div>
        </div>

        <div className='about_content'>
        <div className='row'>
          <div className='col'>
            <div className='text_box brief_content'>
              <div className='brief_skill_icon'>
                <span className='brief_web'><ion-icon name='code'></ion-icon></span>
              </div>
              <div>
                <strong>Web Development</strong>
                <p>Modern and mobile-ready website that will help you reach all of your marketing.</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='text_box brief_content'>
              <div className='brief_skill_icon'>
                <span className='brief_web'><ion-icon name='calculator'></ion-icon></span>
              </div>
              <div>
                <strong>Mobile Development</strong>
                <p>Modern and mobile app that will help you focus everywhere.</p>
              </div>
            </div>
          </div>
        </div>
        </div>


    </div>
  )
}
