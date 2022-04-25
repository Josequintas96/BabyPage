import './css/AppC.css';
import React from "react";
// import {render} from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import {Router, Route} from "react-router";


import Results from "./html/Results";
import Intro from "./html/Intro";
import Survey from './html/Survey';
import SurveyA from './html/SurveyAlternative';

import Control from './html/controlX';
import Chart from './html/chart';
import ChartA from './html/chartA';

import Message from './html/message';
import Nav from './Extra/Nav'
import Navbar from './Extra/Nav2'
import Login from './Extra/Login'
import Signup from './Extra/Signup'
import Logout from './Extra/Logout';
import Dashboard from './Extra/Dashboard';

//function App() {
class App extends React.Component
{


        render()
        {
          return (
            <div className="App"> 
              {/* <section class="AppNav">
                  
              </section> */}
              

              <div class='ControlB' >
              <Router>
              <Nav/>
              <Navbar />
                      <Routes >
                          <Route path='/' exact element={<Intro   />} />
                          <Route exact path="/results" element={<Results/>} />
                          <Route exact path="/survey" element={<Survey />} />
                          <Route exact path="/control" element={<Control />} />
                          <Route exact path='/chart' element={<Chart />} />
                          <Route exact path='/message' element={<Message />} />
                          <Route exact path='/Signup' element={<Signup />} />
                          <Route exact path='/Login' element={<Login />} />
                          <Route exact path='/Logout' element={<Logout />} />
                          <Route exact path='/Dashboard' element={<Dashboard />} />
                          <Route exact path='/SurveyA' element={<SurveyA />} />
                          <Route exact path='/chartA' element={<ChartA />} />
                          {/* <Route exact path="/survey" render={(props) => (<Search Input={this.state.search_for} search_F={this.handleSearch} /> )} /> */}
                      </Routes>
                     
                
              </Router>
              </div>
            </div>
          );
        }
}

export default App;
