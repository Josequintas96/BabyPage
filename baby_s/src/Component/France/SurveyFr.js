import '../../css/Survey.css';
import React from "react";
import axios from 'axios';


import Gaby_belly from "../../image/gaby_photo/gaby_pregnant2.jpeg";

class SurveyFr extends React.Component
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

      <h1 class='Surveyh1'>
        A VOS VOTES!
      </h1>

      <section class="stage">
          <section class="stage_p">
                <p>
                Ici vous pouvez voter pour le sexe du bébé,
                la date de naissance (prévue par les « experts
                 » le 5 juillet) et nous laisser un message pour 
                le livre d'or du bébé ! 
                </p>
                <p>
                    Merci! 
                </p>
                <p>
                    Gaby et Val
                </p>
          </section>

          <img src ={Gaby_belly}  class="stage_img"/>
            
      </section>

     

      <section class="intro">
      </section>

    <section class="stage st0">

      <br class="space_div"/>
      <form action="/action_page.php" onSubmit={this.handleSubmit}>
        
        
        <label for="fname" class="survey_left">Prénom du participant :</label>
        <div class= "survey_rigth">
          <input type="text" id="fname" 
                placeholder="PRENOM"
                value={this.state.name} name="name"
                maxlength="30"
                onChange={this.handleInput} 
                class= "survey_rigth_i"/> 
        </div>
        

        <br class="space_div"/>



        <label for="fname" class="survey_left" > Quel est le sexe du bébé ?:</label>
        <div class= "survey_rigth">
          <select name="gender" 
                  value={this.state.gender} 
                  onChange={this.handleInput}
                  class= "survey_rigth_i">
                  <option value="none" selected="null">SEXE</option>
                  <option value="M">Petit Garçon</option>
                  <option value="F">Petite Fille</option>
              </select>

        </div>
        
        <br />

        <label for="fname" class="survey_left">
        La date prévue est le 5 juillet, à quelle date pensez-vous qu'il va naître ?
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
        Laissez-nous votre message pour le livre d’or du bébé :
        </label>
        <textarea id="w3review" name="message"  rows="4" cols="50" 
                    value={this.state.message} 
                    onChange={this.handleInput}
                    placeholder="Ecrivez par ici…"
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
            ENVOYER
        </button>
        <button type="Reset" 
          class = "button-25">
            {/* class="survey_bottom"> */}
            EFFACER ET RECOMMENCER
        </button>

        {/* <input type="Reset" value="Resetear" /> */}
        
      </form> 

      <br class="space_div"/>
      </section>


     

      <section class="intro"></section>


      <footer class="footer">

      </footer>


    </body>
    
  );}
}

export default SurveyFr;