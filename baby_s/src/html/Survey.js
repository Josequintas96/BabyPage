import '../css/App.css';

function Survey() {
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


      <form action="/action_page.php">
        <label for="fname">Nombre del participante:</label>
          <input type="text" id="fname" name="fname" />
            
          <br></br>
        <label for="fname">Genero esperado del bebe:</label>
          <select name="gender">
              <option value="none" selected>Genero</option>
              <option value="male">Hombre</option>
              <option value="female">Mujer</option>
          </select>
          <br></br>

        <label for="fname">Dia de nacimiento esperado para el bebe:</label>
          <input type="date" id="mayborn" name="mayborn" value="2022-07-05" />
          <br></br>
        <label for="fname">Mensaje para los padres:</label>
          <textarea id="w3review" name="w3review" rows="4" cols="50">
            Escribe tu mensaje aqui.
          </textarea>
          
        <br></br>

        <input type="submit" value="Enviar" />
        <input type="Reset" value="Resetear" />

      </form> 


     

      <section class="intro"></section>


      <section>
          {/* <img  src= "https://global-uploads.webflow.com/61832088cc97eb577fc81c35/61832088cc97eb139cc8201d_61516ba9589fb6822bd4a7c9_thankyou__FillWzcwMCw0NDBd.jpeg"
        style="width:350px;height:200px;" /> */}
        hello
      </section>


      <footer class="footer">

      </footer>


    </body>
    
  );
}

export default Survey;