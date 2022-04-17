import '../css/Intro.css';

//image
import Survey_image from '../image/survey.png';
import Message_image from '../image/messages.png';

function Intro() {
  return (
    <body >

      <h1>
        Gaby & Val Cuestonario de Nuestro Futuro Babe
      </h1>

      <section class='block_intro'>
        <p >
          Ha sido una larga espera de nueve meses; 
          han habido algunas dificultades pero 
          este tiempo de crecimiento son memorias 
          que seran siempre apreciadas por mi.
        </p>
        <p>
          En celebrracion para su futuro nacimiento, 
          hoy les pido que partipen en este cuestionaio; 
          que opinan de nuestro futuro bebe. 
        </p>

      </section >

      <section class='link_intro'>
        <a href='/chart'>
          <img src={Message_image}/>
        </a>
        <p class="intro_navigator">
        {/* &lt;- Navigator -&gt; */}
        </p>
        <a href='/survey'>
          <img src={Survey_image} />
        </a>
      </section>

      


      <footer class="footer">

      </footer>


    </body>
    
  );
}

export default Intro;