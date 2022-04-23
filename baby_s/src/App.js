import './css/AppC.css';
import React from "react";
// import {render} from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import {Router, Route} from "react-router";


import Results from "./html/Results";
import Intro from "./html/Intro";
import Survey from './html/Survey';
import Control from './html/controlX';
import Chart from './html/chart';
import Message from './html/message';
import Nav from './Extra/Nav'

//function App() {
class App extends React.Component
{


        render()
        {
          return (
            <div className="App"> 
              {/* <section class="AppNav">
                  
              </section> */}
              <Nav />

              <div class='ControlB' >
              <Router>
                
                      <Routes >
                          <Route path='/' exact element={<Intro   />} />
                          <Route exact path="/results" element={<Results/>} />
                          <Route exact path="/survey" element={<Survey />} />
                          <Route exact path="/control" element={<Control />} />
                          <Route exact path='/chart' element={<Chart />} />
                          <Route exact path='/message' element={<Message />} />
                          {/* <Route exact path="/survey" render={(props) => (<Search Input={this.state.search_for} search_F={this.handleSearch} /> )} /> */}
                      </Routes>
                     
                
              </Router>
              </div>
            </div>
          );
        }
}

export default App;
