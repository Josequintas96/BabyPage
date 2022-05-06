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
                            <Route exact path="/results" element={<Results/>} />
                            <Route exact path="/survey" element={<Survey />} />
                            <Route exact path="/control" element={<Control />} />
                            <Route exact path='/chart' element={<Chart />} />
                            <Route exact path='/message' element={<Message />} />
                            <Route exact path='/Signup' element={<Signup />} />
                            <Route exact path='/New_user' element={<New_user />} />
                            <Route exact path='/Login' element={<Login />} />
                            <Route exact path='/Logout' element={<Logout />} />
                            {/* <Route exact path='/Dashboard' element={<Dashboard />} /> */}
                            <Route exact path='/SurveyA' element={<SurveyA />} />
                            <Route exact path='/chartA' element={<ChartA />} />
                            <Route exact path='/Timer' element={<Timer />} />
                            <Route exact path='/eraser' element={<Eraser />} />
                            {/* <Route exact path="/survey" render={(props) => (<Search Input={this.state.search_for} search_F={this.handleSearch} /> )} /> */}
                            <Route path="/*" element={<NotFound />} />
                          {/* </Switch> */}
                      </Routes>
              </Router>
              </div>
            </div>
          );
        }
}

export default App;
