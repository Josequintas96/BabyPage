import './Nav.css';

import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import axios from 'axios';

//image
import { Link } from 'react-router-dom';

const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`07/05/${year}`) - +new Date();
  
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        D: Math.floor(difference / (1000 * 60 * 60 * 24)),
        H: Math.floor((difference / (1000 * 60 * 60)) % 24),
        min: Math.floor((difference / 1000 / 60) % 60),
        sec: Math.floor((difference / 1000) % 60)
      };
    }
  
    return timeLeft;
  }
  


const Timer = () => {


    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [numb, setNumb] = useState(1);


    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
      });

      const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
        return;
    }
    
    timerComponents.push(
        <div class={"Timer_control"+timerComponents.length }>
        <h1>
            {timeLeft[interval]} {interval}{" "}
        </h1>
        </div>
    );
    });


  
        return (
          <section class="Timer"   >
            <h1 class="Timer_title">Tiempo antes del Nacimiento</h1>
            
            {timerComponents.length ? timerComponents : <span>Ha llegado!</span>}


          </section>
          
        );
}

export default Timer;

