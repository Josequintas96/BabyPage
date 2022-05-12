import '../../css/message.css';
import React from "react";
import Chart from "../chart";
import Result from "../Results";
import Standart_p from '../standart_p'

import A_DOWN from "../../image/A-DOWN.png";
import A_UP from "../../image/A-UP.png";


//image

class MesssageFr extends React.Component
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

            <h1>
                Babillard
            </h1>

            <section class='block_intro'>
                {this.state.user ===null?
                    (<p >
                        Merci d'avoir participé à cette merveilleuse 
                        expérience. Comme preuve de votre participation, 
                        voici les résultats de votre participation.
                        </p>)
                    :
                    (<p >
                        Voici les participants et leurs souhaits à votre 
                        personne; J'espère que leurs messages vous 
                        parviendront sains et saufs et vous souhaite la 
                        prospérité.
                    </p>)
                    }
                
            </section >

            <section class="intro"></section>

            {/* <button onclick={this.myFunction()}>Click Me</button> */}
            <div class="message_hidd">
                <h2 class="title_mess"> Résultats</h2>
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
                    <h2 class="title_mess">Calendrier</h2>
                    
                    {this.state.isHiddenCalendar?
                        (<img src={A_DOWN} class="mess_picture" onClick={() => this.calendar_twist()}/>)
                        :
                        (<img src={A_UP} class="mess_picture" onClick={() => this.calendar_twist()}/>)
                    } 
            </div>

            <section class="intro"></section>
             
            {/* <Chart  /> */}
            
            <div class="message_hidd">
                    {this.state.user ===null?
                    (<h2 class="title_mess">Intervenants</h2>)
                    :
                    (<h2 class="title_mess">Des postes</h2>)
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
                    (<Standart_p />)
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
            
            {/* <Result/> */}

            
            <section class="intro"></section>

            <br class="space_div"/>

            <footer class="footer">

            </footer>


            </body>
            
        );
    }
}

export default MesssageFr;