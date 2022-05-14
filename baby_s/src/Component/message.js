import '../css/message.css';
import React from "react";

import MessageSp from './Spanish/messageSp.js';
import MessageFr from './France/messageFr.js';



//image

class Messsage extends React.Component
{
    state = {
        isHiddenGender: false,
        isHiddenMessage: false,
        isHiddenCalendar: false,
        user: '',
        }



    render(){
        return (
            <>
                {(localStorage.getItem('language')==='Spanish')?
                    (<MessageSp/>)
                    :
                    (<MessageFr/>)
                }

            </>
            
        );
    }
}

export default Messsage;

