import './Nav.css';

import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import TimerSp from "./tools/TimerSp.js";
import TimerFr from "./tools/TimerFr.js"


class Timer extends React.Component
{
  state = {
    details: [],
  };

  render(){
  return (
    <>

          {(localStorage.getItem('language')==='Spanish')?
            (<TimerSp/>)
            :
            (<TimerFr/>)
          }

    </>
    
  );}
}


export default Timer;

