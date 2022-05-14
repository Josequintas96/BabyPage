import '../css/Intro.css';

//image
import IntroSP from './Spanish/IntroSP.js';
import IntroFr from './France/IntroFr.js';

function Intro() {
  return (
    <>
    {(localStorage.getItem('language')==='Spanish')?
            (<IntroSP/>)
            :
            (<IntroFr/>)
          }


    </>
    
  );
}

export default Intro;