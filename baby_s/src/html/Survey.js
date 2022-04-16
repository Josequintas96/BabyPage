import '../css/App.css';
import React from "react";
import axios from 'axios';

class Survey extends React.Component
{
  state = {
    details: [],
    user: "",
    quote: "",
  };

 
    handleInput = (e) => {
      this.setState({
          [e.target.name]: e.target.value,
      });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("http://localhost:8000/wel/", {
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
          .catch((err) => {});
    };

  render(){
  return (
    <body>

      <h1>
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
        
        
        <label for="fname">Nombre del participante:</label>
            <input type="text" id="fname" 
                    placeholder="Nombre"
                    value={this.state.name} name="name"
                    onChange={this.handleInput} /> 
            <br></br>



        <label for="fname">Genero esperado del bebe:</label>
            <select name="gender" 
                    value={this.state.gender} 
                    onChange={this.handleInput}>
                          <option value="none" selected="null">Genero</option>
                          <option value="M">Hombre</option>
                          <option value="F">Mujer</option>
            </select>
            <br></br>

        <label for="fname">Dia de nacimiento esperado para el bebe:</label>
          <input type="date" id="mayborn" name="birth" 
                  value={this.state.birth} 
                  onChange={this.handleInput}/>
          <br></br>



        <label for="fname">Mensaje para los padres:</label>
          <textarea id="w3review" name="message"  rows="4" cols="50" 
                    value={this.state.message} 
                    onChange={this.handleInput}>
            Escribe tu mensaje aqui22.
          </textarea>
          
        <br></br>

        {/* <input type="submit" value="Enviar" /> */}
        <button type="submit" className="btn btn-primary mb-5">
            Enviar
        </button>
        <button type="Reset" className="btn btn-primary mb-5">
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

export default Survey;