import "../css/calendar.css";
import numb1 from "../image/icons_control/number_1.png";
import medal1 from "../image/icons_control/medal1.png";
import medal2 from "../image/icons_control/medal2.png";
import medal3 from "../image/icons_control/medal3.png";
import question from "../image/question.png";

import Moment from 'moment';

const ProgressBar = (props) => {
    const { bgcolor, completed, numb, idX, date} = props;
  
    let renderSwitch = (param) => {
      switch (param) {
            case 0:
                return medal1;
            case 1:
              return medal2;
            case 2:
              return medal3;
            
            default:
                return question;
      }
  };
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      // textAlign: 'center',
    }
    
    // const labelStyles = {
    //   padding: 125,
    //   color: 'white',
    //   fontWeight: 'bold'
    // }
  
    return (
      <section class="calendar_cont">
        
            {
                  <div class={"bar_rank "+ "sp_"+props.idX}>
                    <img src={renderSwitch(props.idX)} class="bar_img" />
                    <scan class="bar_spX">
                        {Moment(props.date).format('d MMM')}
                    </scan>
                    
                  </div>              
            }
            
            
            
        
        <div class="bar_cont">
            <div class="containerStyles">
              <div style={fillerStyles} class="word_calendar">
                <span class="labelStyles">{`${numb} votos`}</span>
              </div>
            </div>
        </div>
      </section>
    );
  };
  
  export default ProgressBar;
  


  /*

  {(props.idX == 0)?
                (
                  <div class={"bar_rank "+ "sp_"+props.idX}>
                    <img src={numb1} class="bar_img" />
                    <scan class="bar_spX">
                        {Moment(props.date).format('d MMM')}
                    </scan>
                    
                  </div>
                
                ):
                (
                  <div class={"bar_rank "+ "sp_"+props.idX}>
                    <h2 class="bar_title">
                        {props.idX+1}
                      </h2>
                      <p class="bar_spX">
                        {Moment(props.date).format('d MMM')}
                      </p>
                  </div>
                
                )
              
            }


  */