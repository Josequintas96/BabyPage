import '../css/standard_p.css';


import React from "react";
import axios from 'axios';

//image
import Male_baby from "../image/son.png";
import Female_baby from "../image/daughter.png";
import Question from "../image/question.png";

class Standart_p2 extends React.Component
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
      switch (param%5) {
            case 0:
                return "st_sixth";
            case 1:
              return "st_primary ";
            case 2:
              return "st_secondary";
            case 3:
              return "st_third";
            case 4:
                return "st_fourth";
            case 5:
                return "st_fifth";
            default:
                return "st_sixth";
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

            {this.state.details.filter(detailX => detailX.name.toLowerCase().includes(this.state.search.toLowerCase())
            ).map((detail, id) => (
					
                <div class="standard_">
                    <div class={"standard_id "+this.renderSwitch(id)}>
                            {id}
                    </div>

                    <div class={"standard_name "+this.renderSwitch(id)}>
                        {detail.name}
                    </div>
                     
                </div>
              ))}
              
          </body>
          
        );
      }
}

export default Standart_p2;


