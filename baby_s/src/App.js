import './css/App.css';
import React from "react";
// import {render} from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import {Router, Route} from "react-router";


import Results from "./html/Results";
import Intro from "./html/Intro";
import Survey from './html/Survey';
import Control from './html/controlX';
import Chart from './html/chart';

//function App() {
class App extends React.Component
{


        render()
        {
          return (
            <div className="App"> 
              <Router>
                <body  >
                  hello
                  <div >  
                    hello2          
                      <Routes>
                          <Route path='/' exact element={<Intro />} />
                          <Route exact path="/results" element={<Results/>} />
                          <Route exact path="/survey" element={<Survey />} />
                          <Route exact path="/control" element={<Control />} />
                          <Route exact path='/chart' element={<Chart />} />
                          {/* <Route exact path="/survey" render={(props) => (<Search Input={this.state.search_for} search_F={this.handleSearch} /> )} /> */}
                      </Routes>
                    </div>  
                </body>
              </Router>
            </div>
          );
        }
}

export default App;
