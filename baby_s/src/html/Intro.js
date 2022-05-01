import '../css/Intro.css';

//image
import Survey_image from '../image/survey.png';
import Message_image from '../image/messages.png';
import Welcome_X from '../image/Welcome.png';

function Intro() {
  return (
    <body class="controlBB" >

      {/* <img src={Welcome_X}/> */}

      <h1>
        Gaby & Val Cuestonario de Nuestro Futuro Babe
      </h1>

      <section class='block_intro'>
        <p >
          Ha sido una larga espera de nueve meses;
          enfrentamos difiicultades en este periodo
          de tiempo, pero ninguna de la cual nos haga 
          arrepentirr de la decision que hemos tomado; 
          hicimos preciadas memorias en estos nueve meses; 
          y muchas mas preciadas memorias haremos con la
          nueva adicion a la familia.

        </p>
        <p>
          En celebracion este evento tan especial, 
          hoy les pido que partipen en este cuestionaio; 
          que opinan de nuestro futuro bebe, que genereo 
          creen que sera y que fecha esperen que nasca. 
        </p>
        <p>
          Debajo encontraran dos opciones; a la imagen de 
          la derecha esta el cuestionario; a la izquierda 
          esta un confirmante de participacion
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

      


      <footer class="footer">

      </footer>


    </body>
    
  );
}

export default Intro;