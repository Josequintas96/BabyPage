import "../css/calendar.css";
import numb1 from "../image/icons_control/number_1.png";


const ProgressBar = (props) => {
    const { bgcolor, completed, numb, idX, date} = props;
  
    // const containerStyles = {
    //   height: 40,
    //   width: '90%',
    //   backgroundColor: "#e0e0de",
    //   borderRadius: 50,
    //   margin: 30
    // }
  
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
        
            {(props.idX == 0)?
                (
                  <div class={"bar_rank "+ "sp_"+props.idX}>
                    <img src={numb1} class="bar_img" />
                    <scan class="bar_spX">
                        {props.date}
                    </scan>
                    
                  </div>
                
                ):
                (
                  <div class={"bar_rank "+ "sp_"+props.idX}>
                    <h2 class="bar_title">
                        {props.idX+1}
                      </h2>
                      <p class="bar_spX">
                        {props.date}
                      </p>
                  </div>
                
                )
              
            }
            
            
            
        
        <div class="bar_cont">
            <div class="containerStyles">
              <div style={fillerStyles} class="word_calendar">
                <span class="labelStyles">{`${numb} votes`}</span>
              </div>
            </div>
        </div>
      </section>
    );
  };
  
  export default ProgressBar;
  