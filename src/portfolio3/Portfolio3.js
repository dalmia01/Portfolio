import React from 'react';
import {Sidebar} from './components/Sidebar';
import './assets/css/portfolio3.scss';
import pic1 from '../assets/team-1.jpg';
import sign from '../assets/signature5ec286a2447b2.png';
import Slider from 'react-slick';

const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay:true,
      pauseOnHover:true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows:false,
      responsive:[
        {
          breakpoint:950,
          settings:{
            slidesToShow:1
          }
        }
      ]
};

const settings1 = {...settings,autoplay:false,responsive:[
  {
    breakpoint:950,
    settings:{
      slidesToShow:1,
      autoplay:true
    }
  }
]};

export const Portfolio3 = props => {

  React.useEffect(()=>{

  },[])


  return (
    <div className='portfolio3'>
      <Sidebar />
      <div className='port3_article'>
      <section className='portfolio3_home content_vert_middle'>
        <div className='portfolio_home_content content'>
          <h2>Prateek Dalmia</h2>
          <h5>Front-End Developer</h5>
          <button className='port3_home_btn_white border_round'>View Resume</button>
          <button className='port3_home_btn_black border_round'>Hire Me</button>
        </div>
      </section>

      <section className='port3_about content_vert_middle'>
      <div className='content'>

        <div className='port3_about_card'>
          <div className='left_card'>
            <img src={pic1} className='port3_about_image'/>
            <span className='port3_about_info'>
              <span>Prateek Dalmia</span>
              <span>Front-End Developer</span>
            </span>
          </div>

        </div>

        <div className='right_card'>
          <h2>About Me</h2>
          <div className='about_info_content'>Hello! This is Prateek Dalmia a Front End Developer Based on New Delhi, India.
          I Have 2+ Years Experience in development, Currently Work @ Onkar Infotech, as a Javascript Developer.
          I aim to make a difference through some of my experience in website design, building and customizing it.</div>

          <div  className='about_info_content pt40 pinfo'><b>Address : </b><span> 387 House, Block Kg-2, Vikaspuri, New Delhi, India.</span></div>
          <div className='about_info_content pinfo'><b>Date of birth : </b><span> December 25, 1993</span></div>
          <div className='about_info_content pinfo'><b>Twitter : </b><span> <a>twitter.com/dalmia01</a></span></div>
          <div className='about_info_content pinfo'><b>Interest : </b><span>music, cricket</span></div>
          <img src={sign} />
        </div>


        {/**/}
      </div>
      </section>

      <section className='port3_experience'>
        <div className='m30'>
          <h4>Experience</h4>

          <div>

          <Slider {...settings}>

              <div className='port3_experience_card'>
                <div className='port3_experience_card_content'><h5 className='date'><ion-icon name="calendar"></ion-icon><span>June 2018 - Present</span> <ion-icon name="business"></ion-icon> Onkar Infotech</h5>
                <div className='desig'>JavaScript Developer</div>
                <div className='role'>Working on travel based B2C portal, developing end to end front end.</div></div>
              </div>
              <div  className='port3_experience_card'>
                <div className='port3_experience_card_content'><h5 className='date'><ion-icon name="calendar"></ion-icon><span>Aug 2017 - May 2018</span> <ion-icon name="business"></ion-icon> Self Obsessed</h5>
                <div className='desig'>Front-End Developer</div>
                <div className='role'>Worked on an Internal Web Platform to help users view daily task, review and some other functionalities.</div></div>
              </div>
              <div className='port3_experience_card'>
                <div className='port3_experience_card_content'><h5 className='date'><ion-icon name="calendar"></ion-icon><span>Aug 2016 - July 2017</span> <ion-icon name="business"></ion-icon> DRDO</h5>
                <div className='desig'>Apprentice Engineer</div>
                <div className='role'>Worked on Alternate Web Portal with Business and Product teams for inputs.</div></div>
              </div>
              <div className='port3_experience_card'>
                <div className='port3_experience_card_content'><h5 className='date'><ion-icon name="calendar"></ion-icon><span>June 2015 - Feb 2016</span> <ion-icon name="business"></ion-icon> Revolute Soft Solutions</h5>
                <div className='desig'>Junior Developer</div>
                <div className='role'>Responsible for developing companies website.</div></div>
              </div>

          </Slider>

          </div>

        </div>
      </section>

      <section className='port3_skills m30'>
        <div className='m30'>
          <div>
            <h4>Coding Skills</h4>
            <div className='skill skill1'>
              <div>
                  <div className='skill_name'>JavaScript</div>
                  <div className='skill_percent'></div>
              </div>
            </div>
            <div className='skill skill2'>
              <div>
                  <div className='skill_name'>HTML & CSS</div>
                  <div className='skill_percent'></div>
              </div>
            </div>
            <div className='skill skill3'>
              <div>
                  <div className='skill_name'>Reactjs</div>
                  <div className='skill_percent'></div>
              </div>
            </div>
            <div className='skill skill4'>
              <div>
                  <div className='skill_name'>Nodejs-Expressjs</div>
                  <div className='skill_percent'></div>
              </div>
            </div>

          </div>
          <div>
            <h4>Knowledge</h4>
            <div className='knowldege_lists'>Client Side - React.js, jQuery</div>
            <div className='knowldege_lists'>Server Side - NodeJS-Express.js</div>
            <div className='knowldege_lists'>Mobile apps - React Native</div>
            <div className='knowldege_lists'>Build Tools - Webpack</div>
            <div className='knowldege_lists'>Storages - MongoDB / MySQL</div>
          </div>
        </div>
      </section>

      <section className='port3_experience'>
        <div className='m30'>
          <h4>Education</h4>

          <div>

          <Slider {...settings1}>

              <div className='port3_experience_card'>
                <div className='port3_experience_card_content'><h5 className='date'><ion-icon name="calendar"></ion-icon><span>July 2011 - June 2015</span> <ion-icon name="business"></ion-icon>  Delhi Technical University</h5>
                <div className='desig'>B.Tech in C.S.E</div>
                <div className='role'>Working on travel based B2C portal, developing end to end front end.</div></div>
              </div>
              <div  className='port3_experience_card'>
                <div className='port3_experience_card_content'><h5 className='date'><ion-icon name="calendar"></ion-icon><span>Apr 2009 - Mar 2011</span> <ion-icon name="business"></ion-icon> Kamal Model School</h5>
                <div className='desig'>12<sup>th</sup>Standard</div>
                <div className='role'>Worked on an Internal Web Platform to help users view daily task, review and some other functionalities.</div></div>
              </div>
              <div className='port3_experience_card'>
                <div className='port3_experience_card_content'><h5 className='date'><ion-icon name="calendar"></ion-icon><span>Aug 2016 - July 2017</span> <ion-icon name="business"></ion-icon> DRDO</h5>
                <div className='desig'>Apprentice Engineer</div>
                <div className='role'>Worked on Alternate Web Portal with Business and Product teams for inputs.</div></div>
              </div>
              <div className='port3_experience_card'>
                <div className='port3_experience_card_content'><h5 className='date'><ion-icon name="calendar"></ion-icon><span>June 2015 - Feb 2016</span> <ion-icon name="business"></ion-icon> Revolute Soft Solutions</h5>
                <div className='desig'>Junior Developer</div>
                <div className='role'>Responsible for developing companies website.</div></div>
              </div>

          </Slider>

          </div>

        </div>
      </section>

      <section className='port3_contact'>
        <div className='m30'>
            <h4>Contact Me</h4>
            <div className='form'>
            <div><label>Name</label>
            <input type='text' />
            <span className='error'></span></div>
            <div><label>Email</label>
            <input type='text' />
            <span className='error'></span></div>
            <div><label>Message</label>
            <textarea></textarea>
            <span className='error'></span></div>
            <div><input type='button' value='Send Message' /></div>
            </div>
        </div>
      </section>

      </div>
    </div>
  )
}
