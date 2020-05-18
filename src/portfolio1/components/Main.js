import React, { useState } from 'react';
import {Navbar} from './Navbar';
import {Homecard} from './Homecard';
import {About} from './About';
import {Resume} from './Resume';
import {Works} from './Works';
import {Contact} from './Contact';
import '../css/app.scss';

function Main(props) {

    return (
        <div className='portfolio1'>
          <Navbar/>
          <Homecard />
          <About />
          <Resume />
          <Works/>
          <Contact />
        </div>
    );
}

export default Main;
