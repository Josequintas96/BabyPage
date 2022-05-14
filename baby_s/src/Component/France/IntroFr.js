import '../../css/Intro.css';

//image
import Survey_image from '../../image/survey.png';
import Message_image from '../../image/messages.png';
import baby_val_photo from '../../image/gaby_photo/gaby_pregnant.jpeg';

import Timer from '../../Extra/Timer.js';

function IntroFr() {
  return (
    <body class="controlBB" >

      {/* <img src={Welcome_X}/> */}

      <h1 class="intro_title">
            LE SONDAGE DE BEBE
      </h1>

      <section class="intro"> </section>

      <Timer />

      <section class="intro"> </section>

      <section  class="Intro_section">
        <section class="Intro_section_c2">
            
            <img src={baby_val_photo} class="Intro_section_image2"/>
          
        </section>


        <section class="Intro_section_c">
            <p >
              Nous aimerions vous faire
              participer à notre aventure de
              jeunes parents !
            </p>

            <p>
              Essayez de deviner le sexe du bébé
              et la date de naissance !
            </p>

            <p >
              Vous pouvez aussi laisser un petit
              message pour le livre d’or du bébé
            </p>

            <a href='/survey'>
              <img src={Survey_image} class="Intro_section_image"/>
            </a>
            <a href='/survey'>
                <h4>
                Questionnaire
                </h4 >
            </a>
            
        </section>

        

        <section class="Intro_section_c">
            <p >
                Pour voir les résultats des votes
                et les participants, c’est par ici !
            </p>

    

            
            <a href='/message'>
              <img src={Message_image} class="Intro_section_image"/>
            </a>
            <a href='/message'>
                <h4>
                        Résultats
                </h4>
            </a>
            
       
        </section>


      </section>


      
      <section class="intro"> </section>

      <footer class="footer">

      </footer>


    </body>
    
  );
}

export default IntroFr;