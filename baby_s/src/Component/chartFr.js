import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import React from "react";
import axios from 'axios';
import "../css/chart.css"

let WIDTH = 400;
if (window.innerWidth)
{
    WIDTH = 350;
}

function fingirlamount(array, title) {

    return array.find((element) => {
      return element.symbol === title;
    })
  }

class ChartFr extends React.Component
{
    state = {
        gender: [],
        // [active, setActive] : useState(null),
        active: null,
        width: WIDTH,
        half : WIDTH / 2,
    };


    componentDidMount() {
        let data;
//   http://localhost:8000/wel/
        axios
            // .get("http://127.0.0.1:8000/count/")
            .get("https://gaby-val-future-baby2022.herokuapp.com/count/")
            .then((res) => {
                data = res.data;
                console.log("THIS IS COUNT: ", res.data)
                this.setState({
                    gender: data,
                });
            })
            .catch((err) => {});
    }

    render(){
        const totalg=
        (this.state.gender.reduce((totalg,currentItem) =>  totalg = totalg + currentItem.amount , 0 ));

        const totalgirls = 
        (this.state.gender.reduce((totalgirls,currentItem) =>  (currentItem.symbol === "Niñas")?  totalgirls = totalgirls + currentItem.amount : totalgirls = totalgirls+ 0, 0 ));
        const totalboys= 
        (this.state.gender.reduce((totalboys,currentItem) =>  (currentItem.symbol === "Niños")?  totalboys = totalboys + currentItem.amount : totalboys = totalboys + 0, 0 ));
            return (
                <main class="controlBC">
                    {console.log("Special count",  this.state.gender)}
                    {console.log("SS count: ", totalg)}
                    
                <svg width={this.state.width} height={this.state.width}>
                    <Group top={this.state.half} left={this.state.half}>
                    <Pie
                        data={this.state.gender}
                        // pieValue={(data) => data.amount * data.inUSD}
                        pieValue={(data) => data.amount}
                        outerRadius={this.state.half}
                        innerRadius={({ data }) => {
                        const size = this.state.active && this.state.active.symbol == data.symbol ? 40 : 30;
                        return this.state.half - size;
                        }}
                        padAngle={0.01}
                    >
                        {(pie) => {
                        return pie.arcs.map((arc) => {
                            return (
                            <g
                                key={arc.data.symbol}
                                // onMouseEnter={() => setActive(arc.data)}
                                onMouseEnter={() => this.setState({active: arc.data})}
                                onMouseLeave={() => this.setState({active: null})}
                                // onMouseLeave={() => setActive(null)}
                            >
                                <path d={pie.path(arc)} fill={arc.data.color}></path>
                            </g>
                            );
                        });
                        }}
                    </Pie>

                    {this.state.active ? (
                        <>
                        
                            <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
                                {/* {`$${Math.floor(this.state.active.amount * this.state.active.inUSD)}`} */}
                                {`$${Math.floor(this.state.active.amount )}`}
                            </Text>

                            <Text
                                textAnchor="middle"
                                fill={this.state.active.color}
                                fontSize={20}
                                dy={-20}
                            >
                                { (this.state.active.symbol === "Niñas")?
                                
                                    `${this.state.active.amount} Petite Fille `
                                    :
                                    `${this.state.active.amount} Petit Garçon `
                                }
                            </Text>

                            <Text 
                                textAnchor="middle" 
                                fill={this.state.active.color} 
                                fontSize={20} dy={+20}
                            >
                                {/* {`$${Math.floor(this.state.active.amount * this.state.active.inUSD)}`} */}
                                {`${((this.state.active.amount/totalg)*100).toFixed(2)}%`}
                            </Text>
                            
                        </>
                    ) : (
                        <>

                        <Text textAnchor="middle" fill="#FF00CC" fontSize={20} dy={20}>
                            {`${totalgirls} Petite Fille`}
                        </Text>

                        <Text textAnchor="middle" fill="#0000FF" fontSize={20} dy={-20}>
                            {`${totalboys} Petit Garçon`}
                        </Text>
                        </>
                    )}
                    </Group>
                </svg>
                </main>
            );
                }
}

export default ChartFr;