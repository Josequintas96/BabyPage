import './css/AppC.css';
import React from "react";
// import {render} from "react-dom";
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';



// import {Router, Route} from "react-router";


import Results from "./Component/Results";
import Intro from "./Component/Intro";
import Survey from './Component/Survey';
import SurveyA from './Component/SurveyAlternative';

import Control from './Component/controlX';
import Chart from './Component/chart';
import ChartA from './Component/chartA';

import Message from './Component/message';
import Nav from './Extra/Nav'
import Login from './Extra/Login'
import Signup from './Extra/Signup'
import Logout from './Extra/Logout';
import Dashboard from './Extra/Dashboard';
import NotFound from './Extra/NotFound';
import Timer from './Extra/Timer';
import Intro_F from './Component/Intro_F';
import New_user from './Extra/Nuevo_usuario';
import Eraser from './Component/eraser';
import Calendar from './Component/calendar';
import Standart_p from './Component/standard_p2';

import baby from "./image/icons_baby/baby_house.png";
import baby_h from "./image/icons_baby/baby_house.png";

//function App() {
class App extends React.Component
{
        render()
        {
          return (
            <div className="App"> 

              <div class='ControlB' >
              <Router>
              <Nav/>
              {/* <Navbar /> */}
                      <Routes >
                        {/* <Switch> */}
                            {/* <Route path='/' exact element={<Intro   />} /> */}
                            <Route path='/' exact element={<Dashboard   />} />
                            
                            {/* <Route path='/Intro_F' exact element={<Intro_F  />} /> */}
                            <Route exact path="/survey" element={<Survey />} />
                            <Route exact path='/message' element={<Message />} />

                            {/* User admin control urls */}
                            <Route exact path='/Signup' element={<Signup />} />
                            <Route exact path='/New_user' element={<New_user />} />
                            <Route exact path='/Login' element={<Login />} />
                            <Route exact path='/Logout' element={<Logout />} />
                            <Route exact path='/eraser' element={<Eraser />} />
                            {/* <Route exact path='/Dashboard' element={<Dashboard />} /> */}
                            
                            {/* <Route exact path="/survey" render={(props) => (<Search Input={this.state.search_for} search_F={this.handleSearch} /> )} /> */}
                            {/*
                              Useless Url
                                  <Route exact path="/results" element={<Results/>} />
                                  <Route exact path="/control" element={<Control />} />
                                  <Route exact path='/SurveyA' element={<SurveyA />} />
                                  <Route exact path='/chartA' element={<ChartA />} />
                                  <Route exact path='/Timer' element={<Timer />} />
                                  <Route exact path='/calendar' element={<Calendar />} />
                                  <Route exact path='/standard' element={<Standart_p />} />
                                  <Route exact path='/chart' element={<Chart />} />
                            */}

                            <Route path="/*" element={<NotFound />} />
                          {/* </Switch> */}
                      </Routes>
              </Router>
              </div>

              <footer class="App_footer">
                  <a href="/">
                        <img src={baby_h} class="image_footer"/>
                  </a>
                 
              </footer>
            </div>
          );
        }
}

export default App;
