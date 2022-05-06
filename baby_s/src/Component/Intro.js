import '../css/Intro.css';

//image
import Survey_image from '../image/survey.png';
import Message_image from '../image/messages.png';
import baby_val_photo from '../image/gaby_photo/gaby_pregnant.jpeg';

import Timer from '../Extra/Timer.js';

function Intro() {
  return (
    <body class="controlBB" >

      {/* <img src={Welcome_X}/> */}

      <h1>
        Gaby & Val Cuestonario de Nuestro Futuro Babe
      </h1>

      <section class="intro"> </section>

      <Timer />

      <section class="intro"> </section>

      <section  class="Intro_section">
        <section class="Intro_section_c">
            <p >
            Los invitamos a participar en nuestra aventura 
            de ser padres intentando adivinar el sexo de bebé 
            y la fecha de nacimiento!
            Además, nos puedes dejar un mensaje para el libro 
            de oro de bebé!
            </p>

            <p >
            Confirmar su participacion, y ver como van las 
            apuestas, entren en resultados dee abajo
            </p>

            <a href='/survey'>
              <img src={Survey_image} class="Intro_section_image"/>
            </a>
            <h4>
              Cuestionario
            </h4 >
        </section>

        <section class="Intro_section_c2">
          
            <img src={baby_val_photo} class="Intro_section_image2"/>
          
        </section>

        <section class="Intro_section_c">
            <p >
            Confirmar su participacion, y ver como van las 
           apuestas, entren en resultados de abajo
            </p>

    

            
            <a href='/message'>
              <img src={Message_image} class="Intro_section_image"/>
            </a>
            <h4>
                Resultados
            </h4>
       
        </section>


      </section>


      
      <section class="intro"> </section>

      <footer class="footer">

      </footer>


    </body>
    
  );
}

export default Intro;