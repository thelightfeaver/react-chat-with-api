import React, { useEffect, useRef } from "react";
import { Message } from "./Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  * as icon   from "@fortawesome/free-solid-svg-icons";
import { useDispatch,useSelector } from "react-redux";
import { fetchSendMessage, fetchReceiveMessage } from "../Redux/MessageAction";
import { useHistory } from "react-router-dom";

export const Chat = _ =>{

    const history = useHistory()
    const text = useRef('')
    const dispatch = useDispatch()
    const userState = useSelector(state => state.user)
    const stateMessages = useSelector(state => state.message)
    
    const sendMessage = msg => dispatch(fetchSendMessage(msg))
    const getMessage = _ => dispatch(fetchReceiveMessage())
    
    const handleClick =(msg) =>{

        const new_msg = {
            'user':userState,
            'text':msg.value
        }
        msg.value = ""
        sendMessage(new_msg)

        
    }
    
    
    
    useEffect(() => {

        const checkInUsername = _ =>{
            if(userState){
              
              history.push('/')
            }
          }
    
          checkInUsername()
    
          window.addEventListener('beforeunload',checkInUsername)


        const timer = setTimeout(() => {
          getMessage()
        }, 1000);
        return () =>{ 
            clearTimeout(timer)
            window.removeEventListener('beforeunload',checkInUsername)
        }
      });
    

    return(
        
        <div className="container-chat">
            
            <div className="box-title">
                <p>Global Chat</p>
            </div>

            <div className="box-chat">
               
                {
                    stateMessages.data.lenght === 0 ? 
                    (false)
                    :
                    (
                        stateMessages.data.map((e,i)=>{
                            return(<Message key={i} data={e}/>)
                        })
                    )
                }
                
            </div>
            <div className="container-control">
                <input ref={text} className="input-msg" required />
                <div className="bar"></div>
                <button onClick={()=> handleClick(text.current)}  type="button"  className="btn_send">
                    <FontAwesomeIcon icon={icon.faPaperPlane} />
                </button>
            </div>

        </div>
    )
}