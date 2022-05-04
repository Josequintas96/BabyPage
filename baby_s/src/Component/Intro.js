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

      <Timer />

      <section class='block_intro'>
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

      </section >

      <section class='link_intro'>
        <div ass="intro_res">
            <a href='/message'>
              <img src={Message_image}/>
            </a>
            <h2>
                Resultados
            </h2>
        </div>
        
        <p class="intro_navigator">
        {/* &lt;- Navigator -&gt; */}
        </p>
        <div class="intro_sur">
            <a href='/survey'>
              <img src={Survey_image} />
            </a>
            <h2>
              Cuestionario
            </h2 >
        </div>
        
      </section>

      <section>
        <img src={baby_val_photo}/>
      </section>

      


      <footer class="footer">

      </footer>


    </body>
    
  );
}

export default Intro;