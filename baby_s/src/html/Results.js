import '../css/result.css';


import React from "react";
import axios from 'axios';

//image
import Male_baby from "../image/son.png";
import Female_baby from "../image/daughter.png";
import Question from "../image/question.png";

class Result extends React.Component
{
    state = {
        details: [],
        // [active, setActive] : useState(null),
        active: null,
    };

    componentDidMount() {
      let data;
      axios
          .get("http://127.0.0.1:8000/wel/")
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

    

    render(){

        return (
          <body>

            <h1>
              Gaby & Val Cuestonario de su Misterioso Babe RESULTADOS
            </h1>

            {this.state.details.map((detail, id) => (
					
                <div key={id}>
                    <div class="message_p">
                      <section class="message_name">
                            {/* <blockquote className={"text-" + this.renderSwitch(id % 6) + 
                                              " blockquote mb-0"}> */}
                                <h1> {detail.name} </h1>
                                <div class={"bg-" + this.renderSwitch(id % 6) }>
                                    Participant {id + 1}
                                </div>
                            {/* </blockquote> */}
                        </section>
                        <section class="message_body">
                              <section class="message_gender">
                                  <div class="">
                                          {(detail.gender=='M')?
                                          (<img src={Male_baby} class="message_picture" />):(<></>)
                                          }
                                          {(detail.gender=='F')?
                                          (<img src={Female_baby} class="message_picture" />):(<></>)
                                          }
                                          {(detail.gender=='1')?
                                          (<img src={Question} class="message_picture" />):(<></>)
                                          }
                                          <p class="message_expected">
                                            {detail.birth.split("T").pop()}
                                          </p>
                                          {/* <cite title="Source Title">{detail.gender}</cite> */}
                                  </div>
                              </section>
                              <section class="message_message">
                                {detail.message}

                              </section>
                        </section>
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