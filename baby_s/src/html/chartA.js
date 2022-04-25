import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import React,  { useState, useEffect, Fragment } from "react";
import axios from 'axios';

const WIDTH = 400;

function ChartA ()
{
    const [data, setData] = useState({gender: []})
    const [active, setActive] = useState(null)
    const [width, setWidth] = useState(WIDTH)
    const [half, setHalf] = useState(WIDTH/2)

    // state = {
    //     gender: [],
    //     // [active, setActive] : useState(null),
    //     active: null,
    //     width: WIDTH,
    //     half : WIDTH / 2,
    // };

    useEffect(async () => {
        const result = await axios(
            "http://127.0.0.1:8000/count/",
            );

            setData(result.data);
        }, []);

//     componentDidMount() {
//         let data;
// //   http://localhost:8000/wel/
//         axios
//             .get("http://127.0.0.1:8000/count/")
//             .then((res) => {
//                 data = res.data;
//                 console.log("THIS IS COUNT: ", res.data)
//                 this.setState({
//                     gender: data,
//                 });
//             })
//             .catch((err) => {});
//     }


        const totalg=
        (this.state.gender.reduce((totalg,currentItem) =>  totalg = totalg + currentItem.amount , 0 ));
            return (
                <main>
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
                                dy={20}
                            >
                                {`${this.state.active.amount} ${this.state.active.symbol} `}
                            </Text>

                            <Text 
                                textAnchor="middle" 
                                fill={this.state.active.color} 
                                fontSize={20} dy={+40}
                            >
                                {/* {`$${Math.floor(this.state.active.amount * this.state.active.inUSD)}`} */}
                                {`${((this.state.active.amount/totalg)*100).toFixed(2)}%`}
                            </Text>
                            
                        </>
                    ) : (
                        <>
                        <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
                            {/* {`$${Math.floor(
                            coins.reduce((acc, coin) => acc + coin.amount * coin.inUSD, 0)
                            )}`} */}
                            {totalg}
                        </Text>

                        <Text textAnchor="middle" fill="#aaa" fontSize={20} dy={20}>
                            {`${totalg} Participantes`}
                        </Text>
                        </>
                    )}
                    </Group>
                </svg>
                </main>
            );
                
}

export default ChartA;