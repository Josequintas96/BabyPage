import '../css/result.css';


import React from "react";
import axios from 'axios';

//image

class Standart_p extends React.Component
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
          .get("https://gaby-val-future-baby2022.herokuapp.com/wel/")
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
                    <div class="participant_p">
                      <div class="message_control">
                      <section class="message_name">
                            {/* <blockquote className={"text-" + this.renderSwitch(id % 6) + 
                                              " blockquote mb-0"}> */}
                                <h1> {detail.name} </h1>
                                <h4 class={"bg-" + this.renderSwitch(id % 6) }>
                                    Participant {id + 1}
                                </h4>
                            {/* </blockquote> */}
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

export default Standart_p;


