
import React from "react";
import ReactDOM from "react-dom";
import HSBar from "react-horizontal-stacked-bar-chart";

import "./styles.css";

import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import axios from 'axios';
import "../css/chart.css"
import "../css/calendar.css"
import ProgressBar from "./progress_bar.js";

const WIDTH = 400;
var coins = [
  { symbol: "ADA", vote: 800, color: "#0033ad" },
  { symbol: "SOL", vote: 5, color: "#00ffbd" },
  { symbol: "BTC", vote: 9, color: "#F7931A" },
];

const testData = [
    { bgcolor: "#6a1b9a", completed: 60 },
    { bgcolor: "#00695c", completed: 30 },
    { bgcolor: "#ef6c00", completed: 53 },
  ];

class Calendar extends React.Component
{
    state = {
        calendar: [],
        // [active, setActive] : useState(null),
        active: null,
        width: WIDTH,
        half : WIDTH / 2,
    };

    renderSwitch = (param) => {
        switch (param%4) {
              case 0:
                  return "red";
              case 1:
                return "blue ";
              case 2:
                return "green";
              case 3:
                return "gray";
              case 4:
                  return "orange";
              default:
                  return "violet";  
        }
    }


    componentDidMount() {
        let data;
//   http://localhost:8000/wel/
        axios
            // .get("http://127.0.0.1:8000/count/")
            .get("https://gaby-val-future-baby2022.herokuapp.com/countCalendar/")
            .then((res) => {
                data = res.data;
                this.setState({
                    calendar: data,
                });
                console.log("Calendar run: ", this.state.calendar);
            })
            .catch((err) => {
                console.log("Error SS");
                console.log(err);
            });
    }      
      
    

      calendar_run( maxUU)
      {
        const calendarX = this.state.calendar.sort((a, b) => b.votes > a.votes ? 1 : -1).slice(0,3)
        
          return(
              <>
              {
                    
                    calendarX.map((calendar, idx) => (
                        <ProgressBar key={idx} 
                            bgcolor={this.renderSwitch(idx)} 
                            completed={parseInt((calendar.votes/maxUU)*100)} 
                            numb ={calendar.votes}
                            idX={idx}
                            date={calendar.birth}/>
                    ))
              }
              </>
        
          )
    }


    render(){
        console.log("Array vote: ", this.state.calendar)

        
        // const maxvote= 0;
        
        // maxvote = (this.state.calendar.reduce((prev, current) => maxvote = (prev.votes > current.votes) ? prev : current));
        // console.log("Max vote: ", maxvote)

        let maxUU = 0
        if (this.state.calendar.length > 0)
        {
            const maxup = this.state.calendar.reduce(
                (maxup2, numb) =>
                {
                    return maxup2 > numb.votes ? maxup2 : numb.votes;
                }
            ,0);
            maxUU = maxup;

        }
        console.log("Max votes: ", maxUU);

        return (
            <div >

                <div >
                    

                    {this.calendar_run(maxUU)}

                </div>

            </div>
        );
        }
}
export default Calendar;

