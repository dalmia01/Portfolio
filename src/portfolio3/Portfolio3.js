import React from 'react';
import {Sidebar} from './components/Sidebar';
import './assets/css/portfolio3.scss';
import pic1 from '../assets/team-1.jpg';
import blog1 from '../assets/single-portfolio-1.jpg';
import blog2 from '../assets/skills-blogs.jpg';
import sign from '../assets/signature5ec286a2447b2.png';
import {serverUrl} from '../url';
import Slider from 'react-slick';
const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

  const [formdata,setFormData] = React.useState({name:'',email:'',message:'',errName:'',errEmail:'',errMsg:'',buttonAbility:true});
  const [successErrMsg,setSuccessErrMsg] = React.useState(null);
  const [skillactiveVal,setSkillActiveVal] = React.useState(0);

  const changeFormData = (e) => {
    let btnabledisable = true;
    switch (e.target.name) {
      case 'name':
      if(e.target.value != '' && formdata.name != '' && formdata.email != '' && formdata.message != ''){
        btnabledisable = false;
      }else{
        btnabledisable = true;
      }
      setFormData({...formdata,name: e.target.value,buttonAbility:btnabledisable,errName:''});break;
      case 'email':

      if(e.target.value != '' && formdata.name != '' && formdata.email != '' && formdata.message != ''){
        btnabledisable = false;
      }else{
        btnabledisable = true;
      }
      setFormData({...formdata,email: e.target.value,buttonAbility:btnabledisable,errEmail:''});break;
      case 'message':

      if(e.target.value != '' && formdata.name != '' && formdata.email != '' && formdata.message != ''){
        btnabledisable = false;
      }else{
        btnabledisable = true;
      }
      setFormData({...formdata,message: e.target.value,buttonAbility:btnabledisable,errMsg:''});break;
      default: break;
    }
  }

  const sendMessage = (e) => {
    e.preventDefault();
    //console.log('hello')
    let errname = '', erremail = '', errmsg = '';

    if(formdata.name.trim().length <= 0 ){
      errname = 'Name field is required *';
    }

    if(formdata.email.trim().length <= 0 ){
      erremail = 'Email field is required *';
    }else if(!re.test(formdata.email)){
      erremail = 'Email must be in email format *';
    }

    if(formdata.message.trim().length <= 0 ){
      errmsg = 'Message field is required *';
    }else if(formdata.message.trim().length > 0  && formdata.message.trim().length < 10){
      errmsg = 'Message field must be atleast of length 10 *';
    }

    setFormData({...formdata,errName:errname,errMsg:errmsg,errEmail:erremail});

    if(formdata.errName == '' && formdata.errEmail == '' && formdata.errMsg == '' && errname == '' && erremail == ''&& errmsg == ''){
      fetch(`${serverUrl}/contact`,{
        method:'POST',
        body:JSON.stringify(formdata),
        headers: {"Content-Type": "application/json"}
      }).then((res)=>res.json())
      .then((data)=>{
        console.log(data);
        if(data.success){
          setSuccessErrMsg(<span style={{color:'#7FE67C'}}>Mesage Sent Successfully</span>);
        }else{
          setSuccessErrMsg(<span style={{color:'#ce0f3d'}}>Some Error Occured. Try Later!</span>);
        }

        const hideMessage = setTimeout(()=>{
          setSuccessErrMsg('');
        },5000);

      }).catch((err)=>{console.log('some eror occured',err)});
    }
  }

  const moveToElement = (elem) => {
      var element = document.getElementById(`${elem}`);
      window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
      });
    }

  const showHideScrollTop = () =>{
    if(window.pageYOffset > 50){
      document.querySelector('.movetToTop').classList.add('moveTopshowIn');
      document.querySelector('.movetToTop').classList.remove('moveTophideOut');
    }else{
      document.querySelector('.movetToTop').classList.add('moveTophideOut');
      document.querySelector('.movetToTop').classList.remove('moveTopshowIn');
    }
  }

  React.useEffect(()=>{
    window.addEventListener('scroll',showHideScrollTop);
  },[]);


  return (
    <div className='portfolio3'>
      <Sidebar />
      <div className='port3_article'>
      <section className='portfolio3_home content_vert_middle' id='port3_home'>
        <div className='portfolio_home_content content'>
          <h2>Prateek Dalmia</h2>
          <h5>Front-End Developer</h5>
          <button className='port3_home_btn_white border_round' onClick={() => moveToElement('port3_experience')}>View Resume</button>
          <button className='port3_home_btn_black border_round' onClick={() => moveToElement('port3_contact')}>Hire Me</button>
        </div>
      </section>

      <section className='port3_about content_vert_middle' id='port3_about'>
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

      <section className='port3_experience' id='port3_experience'>
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

      <section className='port3_skills m30' id='port3_skills'>

        <div className='sub_port3_skill_blog'>
          <div>
            <button className={skillactiveVal == 0 ? 'btn active' : 'btn'} onClick={() => setSkillActiveVal(0)}>Skills</button>
            <button className={skillactiveVal == 1 ? 'btn active' : 'btn'} onClick={() => setSkillActiveVal(1)}>Blogs</button>
          </div>
        </div>

        {(skillactiveVal == 0) &&<div className='m30 skill_set_block'>
          <div className='skill_set_block'>
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
        </div>}
        {(skillactiveVal == 1) && <div className='m30 blog_set_block'>



          <div className='port3_blog_card pb1'>
            <div className='left_card'>
              <img src={blog1} className='port3_blog_card'/>

            </div>

            <div className='right_card'>
              <h3 >Creating MERN Boiler Plate</h3>
              <span class='high_date'>May 20, 2020</span>
              <div className='blog_info_content'>This article is about how to create a simple MERN Boilerplate. Mern Stack is a combo of four technologies MongoDB(M), Express.js(E), React.js(R) & NodeJS(N).</div>
              <div className='readmore'><a href='https://medium.com/@dalmia01/creating-mern-boiler-plate-bed70beeb27a' target='_blank'>Read More <b>...</b> </a></div>

            </div>

          </div>

          <div className='port3_blog_card pb2'>


            <div className='right_card'>
              <h3>The definitive Node.js handbook</h3>
              <span class='high_date'>Sep 06, 2018</span>
              <div className='blog_info_content'>This handbook is a getting started guide to Node.js, the server-side JavaScript runtime environment.</div>
              <div className='readmore'><a href='https://medium.com/free-code-camp/the-definitive-node-js-handbook-6912378afc6e' target='_blank'>Read More <b>...</b> </a></div>

            </div>

            <div className='left_card'>
              <img src={blog2} className='port3_blog_card'/>

            </div>

          </div>




          {/**/}


        </div>}
      </section>

      <section className='port3_experience' id='port3_education'>
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
                <div className='desig'>12<sup>th</sup> Standard</div>
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

      <section className='port3_contact' id='port3_contact'>
        <div className='m30'>
            <h4>Contact Me</h4>
            <form className='form' onSubmit={sendMessage}>
            <div><label>Name</label>
            <input type='text' name='name' value={formdata.name} onChange={changeFormData}/>
            <span className='error'>{formdata.errName}</span></div>
            <div><label>Email</label>
            <input type='text' name='email' value={formdata.email} onChange={changeFormData}/>
            <span className='error'>{formdata.errEmail}</span></div>
            <div><label>Message</label>
            <textarea name='message' value={formdata.message} onChange={changeFormData}></textarea>
            <span className='error'>{formdata.errMsg}</span></div>
            <div><input type='submit' disabled={formdata.buttonAbility} value='Send Message' /></div>
            </form>
        </div>
      </section>

      { successErrMsg && <div className='dataDelivered'>{successErrMsg}</div>}



      </div>
    </div>
  )
}
