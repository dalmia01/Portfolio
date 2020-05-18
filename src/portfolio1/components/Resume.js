import React from 'react';
import quote from '../assets/sign.png';
import '../css/resume.scss';

export const Resume = () =>{
  return(
    <div className='card__diff_started' id='resume_card'>
        <div className='about'>
            <div className='head__title'><span className='first_word'>Resume</span></div>
        </div>
        <div className='resume__about' style={{'padding':'20px 0px 20px 40px'}}>
          <div className='row' style={{'gridTemplateColumns':'100%'}}>
              <span className='text_box resume_text_box' style={{'display':'flex'}}>
                  <i className="fa fa-university some-icon" aria-hidden="true"></i>
                  <span>Education</span>
              </span>
          </div>
        </div>
        <div className='about_content'>
          <div className='row' style={{'gridTemplateColumns':'100%'}}>
              <span className='resume_text_box deg_text first_deg' >
                <div><span className='date'>2011-2015</span></div>
                <div><span className='name'>Delhi Technical University</span></div>
                <div><span className='place'>Delhi</span></div>
                <p>Bachelor's of Technolgy in Computer Science, Delhi, India</p>
              </span>
          </div>
        </div>
        <div className='' style={{'padding':'20px 0px 20px 40px'}}>
          <div className='row' style={{'gridTemplateColumns':'50%'}}>
              <span className='text_box resume_text_box' style={{'display':'flex'}} >
                  <ion-icon name="briefcase" class='some-icon'></ion-icon>
                  <span>Experience</span>
              </span>
          </div>
        </div>
        <div className='about_content'>
          <div className='row'>

            <div className='col'>
              <span className='resume_text_box deg_text' >
                <div><span className='date'>2018-present</span></div>
                <div><span className='name'>JavaScript Developer</span></div>
                <div><span className='place'>Onkar Infotech Pvt Ltd.</span></div>
                <p>Working on travel based B2C portal, developing end to end front end. </p>
              </span>
            </div>
            <div className='col fpx'>
              <span className='resume_text_box deg_text' >
                <div><span className='date'>2017-2018</span></div>
                <div><span className='name'>Software Engineer</span></div>
                <div><span className='place'>Self Obsessed Pvt Ltd.</span></div>
                <p>Worked on an Internal Web Platform to help users view daily task, review and some other functionalities.</p>
              </span>
            </div>

            <div className='col'>
              <span className='resume_text_box deg_text' >
                <div><span className='date'>2016-2017</span></div>
                <div><span className='name'>Apprentice Engineer</span></div>
                <div><span className='place'>DRDO</span></div>
                <p>Worked on Alternate Web Portal with Business and Product teams for inputs.</p>
              </span>
            </div>

            <div className='col fpx'>
              <span className='resume_text_box deg_text' >
                <div><span className='date'>2015-2016</span></div>
                <div><span className='name'>Junior Developer</span></div>
                <div><span className='place'>Revolute Soft Solutions</span></div>
                <p>Responsible for developing company website.</p>
              </span>
            </div>


          </div>
        </div>


        <div className='about'>
            <div className='head__title'><span className='first_word'>My</span><span> Skills</span></div>
        </div>



        <div className='about_content' id='resume_skills'>
        <div className='row'>
          <div className='col'>
            <div className=''>

              <span className='text_box resume_text_box fpx' >
                  <div style={{'paddingBottom': '20px','display': 'flex','alignItems': 'center'}}>
                  <ion-icon name="desktop" class='some-icon'></ion-icon>
                  <span>Knowledge</span></div>
              </span>
            </div>
          </div>
          <div className='col smallhidden'>
            <div className='' >

              <span className='text_box resume_text_box fpx' >
                  <div style={{'paddingBottom': '20px','display': 'flex','alignItems': 'center'}}>
                  <ion-icon name="newspaper" class='some-icon'></ion-icon>
                  <span>Programming</span></div>
              </span>
            </div>
          </div>


        </div>

        <div className='row'>
          <div className='col spx'>
            <div className=''>

            <span className='' >
                <div style={{'paddingTop': '20px'}}>
                <span class='skills_list'>
                    Client Side - React.js, jQuery
                </span>
                </div>
            </span>

            <span className='' >
                <div style={{'paddingTop': '20px'}}>
                <span class='skills_list'>
                    Server Side - NodeJS-Express.js
                </span>
                </div>
            </span>

            <span className='' >
                <div style={{'paddingTop': '20px'}}>
                <span class='skills_list'>
                    Mobile apps - React Native
                </span>
                </div>
            </span>

            <span className='' >
                <div style={{'paddingTop': '20px'}}>
                <span class='skills_list'>
                    Build Tools - Webpack
                </span>
                </div>
            </span>

            <span className='' >
                <div style={{'paddingTop': '20px'}}>
                <span className='skills_list'>
                    Storages - MongoDB / MySQL
                </span>
                </div>
            </span>

            </div>
          </div>

          <div className='col hidden'>
            <div className='' >

              <span className='text_box resume_text_box fpx' >
                  <div style={{'paddingBottom': '20px','display': 'flex','alignItems': 'center'}}>
                  <ion-icon name="newspaper" class='some-icon'></ion-icon>
                  <span>Programming</span></div>
              </span>
            </div>
          </div>


          <div className='col'>
            <div className='' >

            <span className='skill_title' >
                <div style={{'paddingTop': '20px'}}>
                <span>JavaScript</span></div>
                <div className='progress1'>

                </div>
            </span>

            <span className='skill_title' >
                <div style={{'paddingTop': '20px'}}>
                <span>PHP5</span></div>
                <div className='progress2'>

                </div>
            </span>

            <span className='skill_title' >
                <div style={{'paddingTop': '20px'}}>
                <span>HTML5 / CSS3</span></div>
                <div className='progress3'>

                </div>
            </span>




            </div>
          </div>


        </div>

        <div className='row'>
          <div className='col'>
            <div className=''>

              <span className='text_box resume_text_box fpx' >
                  <div style={{'paddingBottom': '20px','display': 'flex','alignItems': 'center'}}>
                  <ion-icon name="code" class='some-icon'></ion-icon>
                  <span>Coding</span></div>
              </span>
            </div>
          </div>
          <div className='col smallhidden'>
            <div className='' >

              <span className='text_box resume_text_box fpx' >
                  <div style={{'paddingBottom': '20px','display': 'flex','alignItems': 'center'}}>
                  <ion-icon name="flag" class='some-icon'></ion-icon>
                  <span>Languages</span></div>
              </span>
            </div>
          </div>


        </div>

        <div className='row'>

          <div class='code spx'>
              <div className='code_skills_progress'>
                <div class="progress_circle p60">
                    <span>60%</span>
                    <div>React / JavaScript</div>
                    <svg>
                      <circle cx='50' cy='50' r='50'></circle>
                      <circle cx='50' cy='50' r='50'></circle>
                    </svg>
                </div>

                <div class="progress_circle p75">
                    <span>70%</span>
                    <div>HTML / CSS</div>
                    <svg>
                      <circle cx='50' cy='50' r='50'></circle>
                      <circle cx='50' cy='50' r='50'></circle>
                    </svg>
                </div>

                <div class="progress_circle p50">
                    <span>50%</span>
                    <div>MySQL / MongoDB</div>
                    <svg>
                      <circle cx='50' cy='50' r='50'></circle>
                      <circle cx='50' cy='50' r='50'></circle>
                    </svg>
                </div>

                <div class="progress_circle p50">
                    <span>50%</span>
                    <div>Webpack</div>
                    <svg>
                      <circle cx='50' cy='50' r='50'></circle>
                      <circle cx='50' cy='50' r='50'></circle>
                    </svg>
                </div>

              </div>
          </div>

          <div className='col hidden' style={{'paddingTop':'20px'}}>
            <div className='' >

              <span className='text_box resume_text_box fpx' >
                  <div style={{'paddingBottom': '20px','display': 'flex','alignItems': 'center'}}>
                  <ion-icon name="flag" class='some-icon'></ion-icon>
                  <span>Languages</span></div>
              </span>
            </div>
          </div>

          <div className='col'>
            <div className='' >

            <span className='skill_title lang' >
                <div style={{'paddingTop': '40px'}}>
                <span>English</span></div>
                <div className='roundprogress'>
                  <span></span><span></span><span></span><span></span><span></span>
                  <span></span><span className='color_null'></span><span className='color_null'></span><span className='color_null'></span><span className='color_null'></span>
                </div>
            </span>

            <span className='skill_title lang' >
                <div style={{'paddingTop': '20px'}}>
                <span>Hindi</span></div>
                <div className='roundprogress'>
                <span></span><span></span><span></span><span></span><span></span>
                <span></span><span className=''></span><span className=''></span><span className='color_null'></span><span className='color_null'></span>
                </div>
            </span>

            <span className='skill_title lang' >
                <div style={{'paddingTop': '20px'}}>
                <span>Regional</span></div>
                <div className='roundprogress'>
                <span></span><span></span><span></span><span></span><span></span>
                <span className='color_null'></span><span className='color_null'></span><span className='color_null'></span><span className='color_null'></span><span className='color_null'></span>
                </div>
            </span>




            </div>
          </div>

        </div>



        </div>


    </div>
  )
}
