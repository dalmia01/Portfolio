import React from 'react';
import sign from '../assets/signature5ec286a2447b2.png';
import Slider from 'react-slick';
import testpic1 from '../assets/testimonial1.jpg';
import testpic2 from '../assets/testimonial2.jpg';
import testpic3 from '../assets/testimonial3.jpg';
import testpic4 from '../assets/testimonial4.jpg';
import testpic5 from '../assets/testimonial5.jpg';
import testpic6 from '../assets/testimonial6.jpg';

var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

const Profile = () =>{

  const sliderEl = React.useRef(null);

  const fromLeft = () =>{
    sliderEl.current.slickPrev();
  }

  const fromRight = () =>{
    sliderEl.current.slickNext();

  }

  return (
    <section className='profile'>
      <div className='block_content'>
        <h3>Profile</h3>
      </div>
      <div className='block_content content'>
        <p>
          <span>I'm a <strong>JavaScript Developer</strong> from Delhi, India. I aim to make a difference through some of my experience in website design, building and customizing it. I love to talk with you about us in future.</span>
        </p>
        <span>Worked with project teams to develop user-friendly and appealing application, websites for users. Met with project manager, business analyst and architect right from beginning of project, creating rough designs. Adjustments to developments as necessary to address problems encountered.</span>
      </div>

      <div className='block_content content'>
        <div className='personal_info'>
          <div>
            <span><b>Name : </b> Prateek Dalmia</span>
            <span><b>Address : </b> 387 House, Block Kg-2, Vikaspuri, New Delhi, India.</span>
            <span><b>Phone : </b> +91 97 11 137485</span>
            <span><b>Interest : </b> music, cricket</span>
          </div>
          <div>
            <span><b>Date of birth : </b> December 25, 1993</span>
            <span><b>Email : </b> dalmia01@gmail.com</span>
            <span><b>Github : </b> <a href='https://github.com/dalmia01'>github.com/dalmia01</a></span>
            <span><b>Twitter : </b> <a href='https://twitter.com/dalmia01'>twitter.com/dalmia01</a></span>
          </div>
          <div></div>
        </div>
      </div>

      <div className='block_content content noborder'>
        <img className='sign' src={sign} />
      </div>

      <div className='block_content content'>
        <h3>Skills</h3>
      </div>

      <div className='block_content content noborder'>
        <div className='skills'>
          <p><b>JavaScript - </b> 3 years experience</p>
          <div className='percent p65'></div>
        </div>
        <div className='skills'>
          <p><b>HTML & CSS - </b> 3 years experience</p>
          <div className='percent p70'></div>
        </div>
        <div className='skills'>
          <p><b>Reactjs / Nodejs-Expressjs - </b> 6 months experience</p>
          <div className='percent p40'></div>
        </div>

      </div>

      <div className='block_content content m60'>
        <h3>Experience</h3>
      </div>

      <div className='block_content content noborder'>
        <div className='experience'>
            <div className='exp'>
              <div><span>JavaScript Developer @ Onkar Infotech</span>  <i>/</i> <span> June 2018 - Present </span></div>
              <p>Working on travel based B2C portal, developing end to end front end.</p>
            </div>
            <div className='exp'>
              <div><span>FrontEnd Developer @ Self Obsessed</span>  <i>/</i> <span>Aug 2017 - May 2018 </span></div>
              <p>Worked on an Internal Web Platform to help users view daily task, review and some other functionalities.</p>
            </div>

            <div className='exp'>
              <div><span>Apprentice Engineer @ DRDO </span> <i>/</i> <span>Aug 2016 - July 2017 </span></div>
              <p>Worked on Alternate Web Portal with Business and Product teams for inputs.</p>
            </div>

            <div className='exp'>
              <div><span>Junior Developer @ Revolute Soft Solutions </span> <i>/</i> <span>June 2015 - Feb 2016 </span></div>
              <p>Responsible for developing companies website.</p>
            </div>
        </div>
      </div>

      <div className='block_content content m60'>
        <h3>Education</h3>
      </div>

      <div className='block_content content noborder'>
        <div className='experience'>
            <div className='exp'>
              <div><span>B.Tech in C.S.E | Delhi Technical University</span>  <i>/</i> <span>July 2011 - June 2015 </span></div>
              <p>Working on travel based B2C portal, developing end to end front end.</p>
            </div>
            <div className='exp'>
              <div><span>12<sup>th</sup> standard | Kamal Model School </span> <i>/</i> <span>Apr 2009 - Mar 2011 </span></div>
              <p>Worked on an Internal Web Platform to help users view daily task, review and some other functionalities.</p>
            </div>


        </div>
      </div>

      <div className='block_content content m60'>
        <h3>Testimonials</h3>
      </div>


      <div className='block_content content scollContenter noborder'>
        <Slider ref={sliderEl} {...settings}>
          <div className='scroll scroll1'>
            <img src={testpic1} />
            <div><h4>Good at developing quick templates!</h4><span><b>Amit Tiwari</b> - COO of Self Obsessed</span></div>
          </div>
          <div className='scroll scroll1'>
            <img src={testpic5} />
            <div><h4>Quick learner, Hard Working and Obedient person!</h4><span><b>Suresh Kumar</b> - Senior Developer, DESIDOC, DRDO</span></div>
          </div>
          <div className='scroll scroll1'>
            <img src={testpic6} />
            <div><h4>Quite there at what we were looking for!</h4><span><b>Siddharth Gaur</b> - CEO of revolute soft solutions</span></div>
          </div>

        </Slider>



        <span className='arrows'>
        <span onClick={fromLeft}>&#10229;</span>
        <span onClick={fromRight}>&#10230;</span>
        </span>


      </div>

      <div className='footer_border'>

      </div>




    </section>
  )
}

export default Profile;
