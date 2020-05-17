import React from 'react';
import '../css/About.scss';
import '../css/contact.scss';
import work1 from '../assets/works1.jpg';
import work2 from '../assets/works2.jpg';
import work3 from '../assets/works3.jpg';
import work4 from '../assets/work4.jpg';
import work5 from '../assets/works5.jpg';
import {serverUrl} from '../url';

const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const Contact = ()=>{

  const [query,setQuery] = React.useState({name:'',email:'',message:'',errName:'',errEmail:'',errMsg:''});

  const nameHandler = (e) =>{
    setQuery({...query,errName:'',name:e.target.value});
  }

  const emailHandler = (e) =>{
    setQuery({...query,errEmail:'',email:e.target.value});
  }

  const messageHandler = (e) =>{
    setQuery({...query,errMsg:'',message:e.target.value});
  }

  const requestSubmit = (e) =>{
    e.preventDefault();
    console.log(query);

    let errname = '', erremail = '', errmsg = '';

    if(query.name.trim().length <= 0 ){
      errname = 'Name field is required *';
    }

    if(query.email.trim().length <= 0 ){
      erremail = 'Email field is required *';
    }else if(!re.test(query.email)){
      erremail = 'Email must be in email format *';
    }

    if(query.message.trim().length <= 0 ){
      errmsg = 'Message field is required *';
    }else if(query.message.trim().length > 0  && query.message.trim().length < 10){
      errmsg = 'Message field must be atleast of length 10 *';
    }

    setQuery({...query,errName:errname,errMsg:errmsg,errEmail:erremail});

    if(query.errName == '' && query.errEmail == '' && query.errMsg == '' && errname == '' && erremail == ''&& errmsg == ''){
      fetch(`${serverUrl}/contact`,{
        method:'POST',
        body:JSON.stringify(query),
        headers: {"Content-Type": "application/json"}
      }).then((res)=>res.json()).then((data)=>{console.log(data)}).catch((err)=>{console.log('some eror occured',err)});
    }



  }

  return(
    <div className='card__diff_started' id='contact_card'>
        <div className='about'>
            <div className='head__title'><span className='first_word'>Get</span><span> in Touch</span></div>
        </div>
        <div className='about_content contact_content'>
          <div className='row'>

            <div className='contact_info personnel_info'>
                <strong className='back_highlight'>Address . . . . .</strong>
                <span>Delhi, India</span>
            </div>
            <div className='contact_info personnel_info'>
                <strong className='back_highlight'>Email . . . . .</strong>
                <span>dalmia01@gmail.com</span>
            </div>
            <div className='contact_info personnel_info'>
                <strong className='back_highlight'>Phone . . . . .</strong>
                <span>+91 97 11 137485</span>
            </div>
            <div className='contact_info personnel_info'>
                <strong className='back_highlight'>Github . . . . .</strong>
                <a href='https://github.com/dalmia01' target='_blank'><span>github.com/dalmia01</span></a>
            </div>


          </div>
        </div>

        <div className='about'>
            <div className='head__title'><span className='first_word'>Contact</span><span> Form</span></div>
        </div>

        <div className='about_content contact_content'>
        <form onSubmit={requestSubmit}>
          <div className='col_row'>
              <div className='form_control'>
                <label>Full Name
                <input type='text' name='name' placeholder='Full Name' value={query.name} onChange={nameHandler} />
                </label>

                <span className='error'>{query.errName}</span>
              </div>
              <div className='form_control'>
                <label>Email Address
                <input type='text' name='email' placeholder='Email Address' value={query.email} onChange={emailHandler}/>
                </label>

                <span className='error'>{query.errEmail}</span>
              </div>
          </div>
          <div className='full_row'>
              <div className='form_control'>
                <label>Your Message
                  <textarea name='message' placeholder='Your Message'  onInput={messageHandler} value={query.message}>{query.message}</textarea>
                </label>

                <span className='error'>{query.errMsg}</span>
              </div>
          </div>
          <div className='col_row'>
              <div className='form_control'>
                 <input type='submit' value='Send Message'  />
              </div>
          </div>
          </form>
        </div>



    </div>
  )
}
