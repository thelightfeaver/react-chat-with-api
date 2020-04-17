import React, { useRef } from "react";
import { Message } from "./Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  * as icon   from "@fortawesome/free-solid-svg-icons";
import { useDispatch,useSelector } from "react-redux";
import { fetchSendMessage, fetchReceiveMessage } from "../Redux/MessageAction";
export const Chat = _ =>{


    const text = useRef('')
    const dispatch = useDispatch()
    const userState = useSelector(state => state.user)
    const stateMessages = useSelector(state => state.message)
    
    const sendMessage = msg => dispatch(fetchSendMessage(msg))
    const getMessage = _ => dispatch(fetchReceiveMessage())
    
    const handleClick = msg =>{

        const new_msg = {
            'user':userState,
            'text':msg.value
        }
        sendMessage(new_msg)
        msg.value = ""
        getMessage()
    }
    
    
     
    

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
                <textarea ref={text} className="inp-msg" cols="5" rows="2" ></textarea>
                <div className="bar"></div>
                <button onClick={()=> handleClick(text.current)}  type="button"  className="btn_send">
                    <FontAwesomeIcon icon={icon.faPaperPlane} />
                </button>
            </div>

        </div>
    )
}