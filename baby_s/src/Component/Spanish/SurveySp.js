import '../../css/Survey.css';
import React from "react";
import axios from 'axios';


import Gaby_belly from "../../image/gaby_photo/gaby_pregnant2.jpeg";

class SurveySp extends React.Component
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
        .post("https://gaby-val-future-baby2022.herokuapp.com/wel/", { 
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
              window.location.replace('/');
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
    <body class="controlBB">

      <h1 calss='Surveyh1'>
        En un futuro incierto; que esperan en Gaby & Val futuro Bebe?
      </h1>

      <section class="stage">
          <section class="stage_p">
                <p>
                Por aquí pueden votar por el sexo del bebé, 
                decirnos si piensas que nacerá otro día que 
                el día previsto ( 5 de julio) y dejarnos un 
                mensaje para crear el libro de oro de bebe ! 

                </p>
                <p>
                    Gracias! 
                </p>
                <p>
                    Gaby y Val
                </p>
          </section>

          <img src ={Gaby_belly}  class="stage_img"/>
            
      </section>

     

      <section class="intro">
      </section>

    <section class="stage st0">

      <br class="space_div"/>
      <form action="/action_page.php" onSubmit={this.handleSubmit}>
        
        
        <label for="fname" class="survey_left">Nombre del participante:</label>
        <div class= "survey_rigth">
          <input type="text" id="fname" 
                placeholder="Nombre"
                value={this.state.name} name="name"
                maxlength="30"
                onChange={this.handleInput} 
                class= "survey_rigth_i"/> 
        </div>
        

        <br class="space_div"/>



        <label for="fname" class="survey_left" > Cual es el sexo del bebé ?:</label>
        <div class= "survey_rigth">
          <select name="gender" 
                  value={this.state.gender} 
                  onChange={this.handleInput}
                  class= "survey_rigth_i">
                  <option value="none" selected="null">Género</option>
                  <option value="M">Niño</option>
                  <option value="F">Niña</option>
              </select>

        </div>
        
        <br />

        <label for="fname" class="survey_left">
        La fecha prevista es el 5 de julio, que fecha crees que nacerá ?:
        </label>
        <div class= "survey_rigth">
            <input type="date" id="mayborn" name="birth" 
                  value={this.state.birth} 
                  onChange={this.handleInput}
                  min="2022-05-01"
                  class= "survey_rigth_i"/>
        </div>
          <br />



        <label for="fname" class="survey_left">
            Déjanos tu mensaje para el libro de oro de bebé:
        </label>
        <textarea id="w3review" name="message"  rows="4" cols="50" 
                    value={this.state.message} 
                    onChange={this.handleInput}
                    placeholder="Escribe tu mensaje aqui."
                    class= "survey_rigth_iX">
            
          </textarea>
          
      { this.state.error_occur ? 
        (<div class="survey_error" > Porfavor revisa tus datos; te falta o has escrito 
        incorectamente uno de los requerimientos </div>)
        :
        (<></>)
      }
       

       <div class="space_div" >  </div>

        {/* <input type="submit" value="Enviar" /> */}
        <button type="submit" 
          class = "button-25">
          {/*  class="survey_bottom"> */}
            Enviar
        </button>
        <button type="Reset" 
          class = "button-25">
            {/* class="survey_bottom"> */}
            Resetear
        </button>

        {/* <input type="Reset" value="Resetear" /> */}

      </form> 

      <br class="space_div"/>
      </section>


     

      <section class="intro"></section>


      <section>
          {/* <img  src= "https://global-uploads.webflow.com/61832088cc97eb577fc81c35/61832088cc97eb139cc8201d_61516ba9589fb6822bd4a7c9_thankyou__FillWzcwMCw0NDBd.jpeg"
        style="width:350px;height:200px;" /> */}
        
      </section>


      <footer class="footer">

      </footer>


    </body>
    
  );}
}

export default SurveySp;