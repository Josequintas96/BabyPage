
import './Nav.css';


import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import axios from 'axios';

//image
import Ven from "../image/venezuela.png";
import France from "../image/france.png";
import Wedding from "../image/wedding.png";
import baby from "../image/baby.png";
import { Link } from 'react-router-dom';



const Nav = () => {

  const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
      if (localStorage.getItem('token') !== null) {
        setIsAuth(true);
      }
    }, []);

    function linktohome() {
        
            window.location.href = "http://localhost:3000/";

          };

  
        return (
          <section class="Nav"   >
              <div class="NavL">
              
                <img src={Ven} class="NavImg" />
                <img src={France} class="NavImg" />
                {/* <img src={Wedding} class="NavImg" /> */}
              </div>

              <div class="NavR">
              {isAuth === true ?
                   (<Link to="/" class="NavR2" > 
                    <img src={Wedding} class="NavImg" />
                  </Link>):
                  (<></>)} 
              
                  <Link to="/" class="NavR2" >
                      <img src={baby} class="NavImg"  />
                  </Link>
              </div>


          </section>
          
        );
}

export default Nav;



// import './Nav.css';


// import React from "react";
// // import { Link } from "react-router-dom";

// import axios from 'axios';

// //image
// import Ven from "../image/venezuela.png";
// import France from "../image/france.png";
// import Wedding from "../image/wedding.png";
// import baby from "../image/baby.png";
// import { Link } from 'react-router-dom';



// class Nav extends React.Component
// {
//     state = {
//         details: [],
//         // [active, setActive] : useState(null),
//         active: null,
//     };

//     linktohome() {
        
//             window.location.href = "http://localhost:3000/";

//           }

//     render(){

//         return (
//           <section class="Nav"   >
//               {/* class="Nav"  */}
//                 {/* <Nav.Item>
//                     <Nav.Link href="/home">Active</Nav.Link>
//                 </Nav.Item> */}
//               <div class="NavL">
              
//                 <img src={Ven} class="NavImg" />
//                 <img src={France} class="NavImg" />
//                 {/* <img src={Wedding} class="NavImg" /> */}
//               </div>

//               <div class="NavR">
//                     <img src={Wedding} class="NavImg" onClick={()=> this.linktohome()}/>
                    
//               </div>
//               <Link to="/" class="NavR" >
//                   <img src={baby} class="NavImg" />
//               </Link>


//           </section>
          
//         );
//       }
// }

// export default Nav;