import '../css/Survey.css';
import React from "react";
import axios from 'axios';

class SurveyA extends React.Component
{
  state = {
    details: [],
    error_occur: false,
  };

 
    handleInput = (e) => {
      this.setState({
          // error_occur: false,
          [e.target.name]: e.target.value,
      });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      axios
        // .post("http://localhost:8000/wel/", {
          .post("https://gaby-val-future2022.herokuapp.com/wel/", { 
              name: this.state.name,
			        gender: this.state.gender,
			        birth: this.state.birth,
              message: this.state.message,
           })
          .then((res) => {
            this.setState({
                  name: "",
                  gender: "",
				          birth: "",
			            message: "",
              });
          })
          .catch((err) => {
            this.setState({
              error_occur: true,
            })
            console.log("ERROR SUPERMAN")
          });
    };

  render(){
  return (
    <body class="controlBb">

      <h1 calss='Surveyh1'>
        Gaby & Val Cuestonario de su Misteriooso Babe
      </h1>

      <section class="stage">
          <p>
            Bienvenidos a la celebracion de nuestro futuro bebe; agradecemos su participacion en este evento tan importane para nosotros. Porfavor respondan el cuestonario debajo para escuchar sus opiniones.
          </p>

          <img src = "https://images.unsplash.com/photo-1617331140180-e8262094733a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" />

      </section>

      <section class="intro">
      </section>

    <section class="stage">

      <form action="/action_page.php" onSubmit={this.handleSubmit}>
        
        
        <label for="fname" class="survey_left">Nombre del participante:</label>
        <input type="text" id="fname" 
              placeholder="Nombre"
              value={this.state.name} name="name"
              maxlength="30"
              onChange={this.handleInput} 
              class= "survey_rigth"/> 
            <div class="space_div">  </div>



        <label for="fname" class="survey_left" >Genero esperado del bebe:</label>
        <select name="gender" 
                value={this.state.gender} 
                onChange={this.handleInput}
                class= "survey_rigth">
                <option value="none" selected="null">Genero</option>
                <option value="M">Hombre</option>
                <option value="F">Mujer</option>
            </select>
            <br />

        <label for="fname" class="survey_left" >Dia de nacimiento esperado para el bebe:</label>
        <input type="date" id="mayborn" name="birth" 
                  value={this.state.birth} 
                  onChange={this.handleInput}
                  class= "survey_rigth"/>
          <br />



        <label for="fname" class="survey_left">Mensaje para los padres:</label>
          <textarea id="w3review" name="message"  rows="4" cols="50" 
                    value={this.state.message} 
                    onChange={this.handleInput}
                    placeholder="Escribe tu mensaje aqui."
                    class= "survey_rigth">
            
          </textarea>
          
      { this.state.error_occur ? 
        (<div class="survey_error" > Porfavor revisa tus datos; te falta o has escrito 
        incorectamente uno de los requerimientos </div>)
        :
        (<></>)
      }
       

       <div class="space_div" >  </div>

        {/* <input type="submit" value="Enviar" /> */}
        <button type="submit" class="survey_bottom">
            Enviar
        </button>
        <button type="Reset" class="survey_bottom">
            Resetear
        </button>
        {/* <input type="Reset" value="Resetear" /> */}

      </form> 

      </section>


     

      <section class="intro"></section>


      <section>
          {/* <img  src= "https://global-uploads.webflow.com/61832088cc97eb577fc81c35/61832088cc97eb139cc8201d_61516ba9589fb6822bd4a7c9_thankyou__FillWzcwMCw0NDBd.jpeg"
        style="width:350px;height:200px;" /> */}
        hello
      </section>


      <footer class="footer">

      </footer>


    </body>
    
  );}
}

export default SurveyA;