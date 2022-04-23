import './Nav.css';


import React from "react";
// import { Link } from "react-router-dom";

import axios from 'axios';

//image
import Ven from "../image/venezuela.png";
import France from "../image/france.png";
import Wedding from "../image/wedding.png";
import baby from "../image/baby.png";



class Nav extends React.Component
{
    state = {
        details: [],
        // [active, setActive] : useState(null),
        active: null,
    };

    linktohome() {
        
            window.location.href = "http://localhost:3000/";

          }

    render(){

        return (
          <section class="Nav"   >
              {/* class="Nav"  */}
                {/* <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item> */}
              <div class="NavL">
              
                <img src={Ven} class="NavImg" />
                <img src={France} class="NavImg" />
                {/* <img src={Wedding} class="NavImg" /> */}
              </div>

              <div class="NavR">
                    <img src={Wedding} class="NavImg" onClick={()=> this.linktohome()}/>

                    <img src={baby} class="NavImg" />
              </div>


          </section>
          
        );
      }
}

export default Nav;