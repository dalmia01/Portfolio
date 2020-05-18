import React from 'react';

const Contact = () => {
  return (
    <section className='profile'>
    <div className='block_content'>
      <h3>Get In Touch</h3>
    </div>
    <div className='block_content content contact_info noborder'>
      <div className='form'>
        <div><label>Name</label>
        <input type='text' /></div>
        <div><label>Email</label>
        <input type='text' /></div>
        <div><label>Message</label>
        <textarea></textarea></div>
        <div><input type='button' value='Send Message' /></div>
      </div>
      <div className='info'>
        <div className='content_base cb1'>
          <b><ion-icon name="location-outline"></ion-icon>Address</b>
          <p>387 House, Block Kg-2, Vikaspuri, New Delhi, India.</p>
        </div>
        <div className='content_base cb2'>
           <b><ion-icon name="mail-outline"></ion-icon>Email</b>
          <p>dalmia01@gmail.com</p>
        </div>
        <div className='content_base cb3'>
          <b><ion-icon name="call-outline"></ion-icon>Call Me @</b>
          <p>+91 97 11 137485</p>
        </div>
      </div>
    </div>

    <div className='footer_border'>
    </div>
    
    </section>
  )
}

export default Contact;
