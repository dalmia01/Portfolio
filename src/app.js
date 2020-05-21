import React, { useState } from 'react';
import Main from './portfolio1/components/Main';
import Portfolio2 from './portfolio2/Portfolio2';
import {Portfolio3} from './portfolio3/Portfolio3';


import portfoliopic1 from './assets/portfolio1.jpg';
import portfoliopic2 from './assets/portfolio2.jpg';
import portfoliopic3 from './assets/portfolio3.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(props) {

    return (
        <>
          <Router>

            <Switch>
              <Route exact path='/'>
                <div className='first card'>
                  <div>
                    <Link to='/portfolio1'><img src={portfoliopic1} />
                      <div><h4>Portfolio-1</h4></div>
                    </Link>
                  </div>
                  <div>
                    <Link to='Portfolio2'><img src={portfoliopic3} />
                      <div><h4>Portfolio-2</h4></div>
                    </Link>
                  </div>
                </div>
              </Route>

              <Route exact path='/portfolio2'>
                <Portfolio3 />
              </Route>
              <Route exact path='/portfolio1'>
                <Portfolio2 />
              </Route>
            </Switch>

          </Router>
        </>
    );
}

export default App;
