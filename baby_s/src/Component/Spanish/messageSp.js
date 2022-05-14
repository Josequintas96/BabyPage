import '../../css/message.css';
import React from "react";
import Chart from "../chart";
import Result from "../Results";
import Standart_p from '../standart_p';

import Standart_p2 from '../standard_p2'
import Calendar from '../calendar';

//image
import A_DOWN from "../../image/A-DOWN.png";
import A_UP from "../../image/A-UP.png";








class MessageSp extends React.Component
{
    state = {
        isHiddenGender: false,
        isHiddenMessage: false,
        isHiddenCalendar: false,
        user: '',
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

    calendar_twist(){
        if (this.state.isHiddenCalendar)
        {
            this.setState({
                isHiddenCalendar: false
              })
        }
        else
        {
            this.setState({
                isHiddenCalendar: true
              })
        }
    }


    componentDidMount() {
        if (localStorage.getItem('token') !== null);
        {
            const rememberMe = localStorage.getItem('token');
            this.setState({ user: rememberMe });
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
            <body class="controlBB">

            <h1 class="message_title">
                Resultados
            </h1>

            <section class='block_intro'>
                {this.state.user ===null?
                    (<p >
                        Gracias por haber participado ! Ya no queda 
                        de otra que esperar con nosotros que el bebé nazca
                        </p>)
                    :
                    (<p >
                        Aqui estan los participantes y sus deseas 
                        a tu persona; espero que sus mensajes te 
                        lleguen sano y salvo y te deseen prosperidad.
                        </p>)
                    }
                
            </section >

            <section class="intro"></section>

            {/* <button onclick={this.myFunction()}>Click Me</button> */}
            <div class="message_hidd">
                <h2 class="title_mess"> ¿ Cuál es el sexo del bebé ?</h2>
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

            <section class="intro"></section>

            <div class="message_hidd">
                    <h2 class="title_mess"> Fecha más votada :</h2>
                    
                    {this.state.isHiddenCalendar?
                        (<img src={A_DOWN} class="mess_picture" onClick={() => this.calendar_twist()}/>)
                        :
                        (<img src={A_UP} class="mess_picture" onClick={() => this.calendar_twist()}/>)
                    } 
            </div>

            {this.state.isHiddenCalendar?
                (<div >
                    <Calendar  />
                </div>)
                :
                (<></>)
            }
            

            <section class="intro"></section>
             
            {/* <Chart  /> */}
            
            <div class="message_hidd">
                    {this.state.user ===null?
                    (<h2 class="title_mess">Participantes</h2>)
                    :
                    (<h2 class="title_mess">Mensajes</h2>)
                    }
                    
                    {this.state.isHiddenMessage?
                        (<img src={A_DOWN} class="mess_picture" onClick={() => this.message_twist()}/>)
                        :
                        (<img src={A_UP} class="mess_picture" onClick={() => this.message_twist()}/>)
                    } 
            </div>

            
            {this.state.user === null?
                (<>
                    {this.state.isHiddenMessage?
                    (<Standart_p2 />)
                    :
                    (<></>)
                    } 
                </> )
                :
                (<>
                    {this.state.isHiddenMessage?
                    (<Result/>)
                    :
                    (<></>)
                    } 
                </>)}
            

            
            <section class="intro"></section>

           


            </body>
            
        );
    }
}

export default MessageSp;

