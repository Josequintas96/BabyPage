import '../css/Survey.css';
import React from "react";
import axios from 'axios';


import SurveySp from './Spanish/SurveySp';
import SurveyFr from './France/SurveyFr';

class Survey extends React.Component
{
  state = {
    details: [],
  };

  render(){
  return (
    <body class="controlBB">

          {(localStorage.getItem('language')==='Spanish')?
            (<SurveySp/>)
            :
            (<SurveyFr/>)
          }


      <footer class="footer">

      </footer>


    </body>
    
  );}
}

export default Survey;
