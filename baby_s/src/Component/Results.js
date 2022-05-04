import '../css/result.css';


import React from "react";
import axios from 'axios';

//image
import Male_baby from "../image/son.png";
import Female_baby from "../image/daughter.png";
import Question from "../image/question.png";

class Result extends React.Component
{
    constructor(props) {
      super(props);
      this.state = {
          details: [],
          // [active, setActive] : useState(null),
          active: null,
          search: "",
      };
      this.handleChange = this.handleChange.bind(this)

    }

    componentDidMount() {
      let data;
      axios
          // .get("http://127.0.0.1:8000/wel/")
          .get("https://gaby-val-future2022.herokuapp.com/wel/")
          .then((res) => {
              data = res.data;
              this.setState({
                  details: data,
              });
          })
          .catch((err) => {});
    }

    renderSwitch = (param) => {
      switch (param + 1) {
          case 1:
              return "primary ";
          case 2:
              return "secondary";
          case 3:
              return "success";
          case 4:
              return "danger";
          case 5:
              return "warning";
          case 6:
              return "info";
          default:
              return "yellow";
      }
  };

  handleChange(event) 
  {
    this.setState({search:  event.target.value});
  }
    render(){

        return (
          <body class="controlBS">

            <form>
                <input type="text" name="search" 
                placeholder="Buscar.." value={this.state.search} 
                onChange={this.handleChange}
                class="input_r"/>
            </form>

            {this.state.details.filter(detailX => detailX.name.includes(this.state.search)
            ).map((detail, id) => (
					
                <div key={id}>
                    <div class="message_p">

                      <div class="message_control">
                      <section class="message_name">
                            {/* <blockquote className={"text-" + this.renderSwitch(id % 6) + 
                                              " blockquote mb-0"}> */}
                                <h1> {detail.name} </h1>
                                <h4 class={"bg-" + this.renderSwitch(id % 6) }>
                                    Participante {id + 1}
                                </h4>
                            {/* </blockquote> */}
                        </section>

                        <section class="message_body">
                              <section class="message_gender">
                                  <div class="">
                                      <p class="message_gg">
                                        GENERO:
                                      </p>
                                      {(detail.gender=='M')?
                                      (<img src={Male_baby} class="message_picture" />):(<></>)
                                      }
                                      {(detail.gender=='F')?
                                      (<img src={Female_baby} class="message_picture" />):(<></>)
                                      }
                                      {(detail.gender=='1')?
                                      (<img src={Question} class="message_picture" />):(<></>)
                                      }                
                                      {/* <cite title="Source Title">{detail.gender}</cite> */}
                                  </div>
                                  <p class="message_expected">
                                        Fecha: {detail.birth.split("T").pop()}
                                  </p>
                              </section>
                              <section class="message_message">
                                <h3>Para Gaby:</h3>
                                {detail.message}

                              </section>
                        </section>
                        </div>
                    </div>
                    {/* <span className="border border-primary "></span> */}
                </div>
              ))}


            <footer class="footer">

            </footer>


          </body>
          
        );
      }
}

export default Result;