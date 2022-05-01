import '../css/Survey.css';
import React from "react";
import axios from 'axios';

import Result from "./Results";
import A_DOWN from "../image/A-DOWN.png";
import A_UP from "../image/A-UP.png";

class Eraser extends React.Component
{
  state = {
    details: [],
    name: "",
    user_name: "",
    error_occur: false,
    isHiddenMessage: false,
  };

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

  componentDidMount() {
    
    if (localStorage.getItem('token') == null )
    {
        // console.log("RR => ", localStorage.getItem('token'))
        window.location.replace('/');
    }
  }

 
    handleInput = (e) => {
      this.setState({
          // error_occur: false,
          [e.target.name]: e.target.value,
      });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      console.log("Console = ", this.state.name)
      axios
        // .post("http://localhost:8000/wel/", {
        .delete("https://gaby-val-future2022.herokuapp.com/wel/", 
            // { method: 'DELETE' },
            {data: { 
            user_name: this.state.name
           }}
           )
          .then((res) => {
            console.log(res);
            this.setState({
                user_name: "",
              });
            window.location.reload(false);
          })
          .catch((err) => {
            console.log(err);
            console.log("hh");
            this.setState({
              error_occur: true,
            })
            console.log("ERROR SUPERMAN")
          });
    };

  render(){
  return (
    <body class="controlBB">

      <h1 calss='Surveyh1'>
        Borrador de Mensajes
      </h1>


    <section class="intro"></section>

    <div class="message_hidd">
                    <h2 class="title_mess">Mensajes</h2>
                    
                    
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

    
    <section class="intro"></section>


    <section class="stageF">

      <br class="space_div"/>
      <form action="/action_page.php" onSubmit={this.handleSubmit}>
        
        
        <label for="fname" class="survey_left">Nombre del participante a borrar:</label>
        <div class= "survey_rigth">
          <input type="text" id="fname" 
                placeholder="Nombre"
                value={this.state.name} name="name"
                maxlength="30"
                onChange={this.handleInput} 
                class= "survey_rigth"/> 
        </div>
        

        <br class="space_div"/>



          
      { this.state.error_occur ? 
        (<div class="survey_error" > Porfavor revisa tus datos; te falta o has escrito 
        incorectamente uno de los requerimientos </div>)
        :
        (<></>)
      }
       

       <div class="space_div" >  </div>

        {/* <input type="submit" value="Enviar" /> */}
        <button type="submit" class="survey_bottom">
            Borrar
        </button>
        <button type="Reset" class="survey_bottom">
            Resetear
        </button>
        {/* <input type="Reset" value="Resetear" /> */}

      </form> 

      <br class="space_div"/>
      </section>


     

      
      <section>
          
        
      </section>


      <footer class="footer">

      </footer>


    </body>
    
  );}
}

export default Eraser;

