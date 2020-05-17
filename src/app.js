import React, { useState } from 'react';
import {Navbar} from './components/Navbar';
import {Homecard} from './components/Homecard';
import {About} from './components/About';
import {Resume} from './components/Resume';
import {Works} from './components/Works';
import {Contact} from './components/Contact';
import './css/app.scss';

function App(props) {

    return (
        <>
          <Navbar/>
          <Homecard />
          <About />
          <Resume />
          <Works/>
          <Contact />
        </>
    );
}

export default App;
