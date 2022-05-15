import '../Nav.css';

import React, { useState, useEffect } from "react";



const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`07/05/${year}`) - +new Date();
    // let difference = +new Date(`02/05/${year}`) - +new Date();

  
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60)
      };
    }
  
    return timeLeft;
  }
  


const Timer = () => {


    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


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
        
        <div class="Timer_block">
          <div class="Timer_text">
            <h1 class="Timer_h1">
            {timeLeft[interval]} 
            </h1>
            <h3 class="Timer_h3">
                {interval}
            </h3>
          </div>
          <div class={"Timer_separation "+ "time_Sp"+timerComponents.length}>
            {" : "}
          </div>
        </div>
        

    );
    });
  
        return (
          <section class="Timer"   >
            <h1 class="Timer_title">Cuánto tiempo queda antes de conocer a nuestro bebé:</h1>
            
                {timerComponents.length ? timerComponents : 
                
                <div> 
                  <div class="Timer_block">
                        <div class="Timer_text">
                          <h1 class="Timer_h1">
                            00
                          </h1>
                          <h3 class="Timer_h3">
                              days
                          </h3>
                        </div>
                        <div class={"Timer_separation "+ "time_Sp"}>
                          {" : "}
                        </div>
                  </div>
                  <div class="Timer_block">
                        <div class="Timer_text">
                          <h1 class="Timer_h1">
                            00
                          </h1>
                          <h3 class="Timer_h3">
                              hours
                          </h3>
                        </div>
                        <div class={"Timer_separation "+ "time_Sp"}>
                          {" : "}
                        </div>
                  </div>
                  <div class="Timer_block">
                        <div class="Timer_text">
                          <h1 class="Timer_h1">
                            00
                          </h1>
                          <h3 class="Timer_h3">
                              minutes
                          </h3>
                        </div>
                        <div class={"Timer_separation "+ "time_Sp"}>
                          {" : "}
                        </div>
                  </div>
                  <div class="Timer_block">
                        <div class="Timer_text">
                          <h1 class="Timer_h1">
                            00
                          </h1>
                          <h3 class="Timer_h3">
                              seconds
                          </h3>
                        </div>
                  </div>


                      
                  
                  <h1>Ha Llegado !!</h1> 
                
                
                </div>}


          </section>
          
        );
}

export default Timer;



