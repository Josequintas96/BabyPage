import '../css/Intro.css';

//image
import Survey_image from '../image/survey.png';
import Message_image from '../image/messages.png';
import Eraser_image from '../image/eraser.png';
import Setting_image from '../image/settings.png';
import Timer from '../Extra/Timer';

import Welcome_X from '../image/Welcome.png';
import Exit_image from '../image/exit.png';

function Intro_F() {
  return (
    <body class="controlBB" >
    
    {/* <div class="F_intro_img">
         <img src={Welcome_X} class="F_intro_imgF"/>
    </div> */}
        

      <h1 class="F_titleF">
        Bienvenidos Gaby & Val
      </h1>

      <section class='block_intro'>
        <p >
          Esta pagina es para que puedan 
          controlar la pagina web como deseen.
        </p>
        <p>
          Solo esta presente si estan como usuarios; 
          y en ella pueden revisar y borrar mensajes, 
          incribir nuevas personas y contar el timepo 
          antes del nacimiento. 
        </p>
        <p>
          Porfavor siguan los signos debajo
        </p>


      </section >

      <section class='block_intro_F'>
          <section class='block_intro_F2'>

               <div class="intro_resF">
                    <a href='/message'>
                        <img src={Message_image} class="intro_imgFF"/>
                    </a>
                    <p>
                        Resultados
                    </p>
                </div>

                <div class="intro_resF">
                    <a href='/survey'>
                        <img src={Survey_image} class="intro_imgFF"/>
                    </a>
                    <p>
                        Cuestionario
                    </p>
                </div>

          </section>

          <section class='block_intro_F2'>

                <div class="intro_resF">
                    <a href='/eraser' >
                        <img src={Eraser_image} class="intro_imgFF"/>
                    </a>
                    <p>
                        Borrador
                    </p>
                </div>

                <div class="intro_resF">
                    <a href='/New_user'>
                        <img src={Setting_image} class="intro_imgFF"/>
                    </a>
                    <p>
                        Ajustes
                    </p>
                </div>

          </section>

      </section>

      <section>
        <Timer />
      </section>

      <section class="intro"></section>

      <footer class="footer">
          <a href="/logout">
            <img src={Exit_image} class="image_exit_F"/>
          </a>
      </footer>


    </body>
    
  );
}

export default Intro_F;