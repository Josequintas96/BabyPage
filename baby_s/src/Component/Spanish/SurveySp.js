import '../../css/Survey.css';
import React from "react";
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Gaby_belly from "../../image/gaby_photo/gaby_pregnant2.jpeg";
// import DatePicker from "react-datepicker";



const ModalC = () => {
  return (
    <>
      <div class="darkBG" />
      <div class="centered">
        <div class="modal">
          <h1 class="modalContent">
            Gracias por participar!!! Espere a que mensaje se envie
          </h1>
        </div>
      </div>
    </>
  );
};

class SurveySp extends React.Component
{
  state = {
    details: [],
    error_occur: false,
    isOpen: false,
  };

  // [show, setShow] = useState(false);

  setIsOpen = (val) => this.setState({isOpen: val});

 
    handleInput = (e) => {
      this.setState({
          // error_occur: false,
          [e.target.name]: e.target.value,
      });
    };

    handlesubmitControl = (e) =>
    {
      e.preventDefault();
      this.setIsOpen(true);
      this.handleSubmit(e);

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
            this.setIsOpen(false);
          });
    };

// Modal design




  render(){
  return (
    <body class="controlBB">



      <h1 class='Surveyh1'>
          !! QUE COMIENCEN LAS APUESTAS !!
      </h1>

      <section class="stage">
          <section class="stage_p">
                <p>
                Por aquí pueden votar por el sexo del bebé, 
                decirnos si piensan que nacerá otro día que 
                el día previsto (según los “expertos” el 5
                de julio) y dejarnos un mensaje para crear 
                el libro de oro del bebé ! 

                </p>
                <p>
                    ! Gracias ! 
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
      <form onSubmit={this.handlesubmitControl} >
        
        
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



        <label for="fname" class="survey_left" >Cuàl es el sexo del bebé ?:</label>
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
        La fecha prevista es el 5 de julio. En qué fecha crees que nacerá ?:
        </label>
        <div class= "survey_rigth">
            <input type="date" id="mayborn" name="birth" 
                  value={this.state.birth} 
                  onChange={this.handleInput}
                  min="2022-06-01"
                  max="2022-08-30"
                  class= "survey_rigth_i"/>
            {/* <DatePicker
                  selected={this.state.birth}
                  
                  onChange={this.handleInput}
                  minDate={new Date("02-01-2020")}
                  maxDate={new Date("02-29-2020")}
                  placeholderText="Select a date in February 2020"
              /> */}
        </div>
        <br />



        <label for="fname" class="survey_left">
            Déjanos tu mensaje para el libro de oro del bebé:
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

      {/* <button className="primaryBtn" onClick={() => this.setIsOpen()}>
        Open Modal
      </button> */}
      
      {this.state.isOpen && <ModalC />}

     

      <section class="intro"></section>

      
{/* 
<input type="date" id="mayborn" name="birth" 
                  value={this.state.birth} 
                  onChange={this.handleInput}
                  min="2022-05-01"
                  class= "survey_rigth_i"/> */}


      


    </body>
    
  );}
}

export default SurveySp;