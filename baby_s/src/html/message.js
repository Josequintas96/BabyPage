import '../css/message.css';
import React from "react";
import Chart from "./chart";
import Result from "./Results";

import A_DOWN from "../image/A-DOWN.png";
import A_UP from "../image/A-UP.png";


//image

class Messsage extends React.Component
{
    state = {
        isHiddenGender: false,
        isHiddenMessage: false,
        }

    gender_twist(){
        if (this.state.isHiddenGender)
        {
            this.setState({
                isHiddenGender: false
              })
        }
        else
        {
            this.setState({
                isHiddenGender: true
              })
        }
    }

    message_twist(){
        if (this.state.isHiddenMessage)
        {
            this.setState({
                isHiddenMessage: false
              })
        }
        else
        {
            this.setState({
                isHiddenMessage: true
              })
        }
    }

    myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
          } 

    render(){
        return (
            <body >

            <h1>
                Gaby & Val Cuestonario de Nuestro Futuro Babe  Message board
            </h1>

            <section class='block_intro'>
                <p >
                Gracias por participar en esta
                maravillosa experiencia;
                Como prueba de su participacion, 
                aqui estan los resultados de
                su participacion.
                </p>
            </section >


            {/* <button onclick={this.myFunction()}>Click Me</button> */}
            <div class="message_hidd">
                    {this.state.isHiddenGender?
                        (<img src={A_DOWN} class="mess_picture" onClick={() => this.gender_twist()}/>)
                        :
                        (<img src={A_UP} class="mess_picture" onClick={() => this.gender_twist()}/>)
                    } 
            </div>

            {this.state.isHiddenGender?
                (<Chart  />)
                :
                (<></>)
            }

             
            {/* <Chart  /> */}
            
            <div class="message_hidd">
                    {this.state.isHiddenMessage?
                        (<img src={A_DOWN} class="mess_picture" onClick={() => this.message_twist()}/>)
                        :
                        (<img src={A_UP} class="mess_picture" onClick={() => this.message_twist()}/>)
                    } 
            </div>

            {this.state.isHiddenMessage?
                (<Result/>)
                :
                (<></>)
            } 
            {/* <Result/> */}


            <footer class="footer">

            </footer>


            </body>
            
        );
    }
}

export default Messsage;

