import React from "react";
import { Message } from "./Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  * as icon   from "@fortawesome/free-solid-svg-icons";

export const Chat = _ =>{
    return(
        <div className="container-chat">
            <div className="box-title">
                <p>Global Chat</p>
            </div>
            <div className="box-chat">
                <Message data = { { me : false,text : "algo buena ba pasar en tu vida",user:"katuishi" }}/>
                <Message data = { { me : true,text : "algo buena ba pasar en tu vida",user:"katuishi" }}/>
                <Message data = { { me : true,text : "algo buena ba pasar en tu vida",user:"katuishi" }}/>
                <Message data = { { me : false,text : "algo buena ba pasar en tu vida",user:"katuishi" }}/>
                <Message data = { { me : true,text : "algo ",user:"katuishi" }}/>
                <Message data = { { me : true,text : "algo buena ba pasar en tu vida",user:"katuishi" }}/>
                <Message data = { { me : false,text : "algo buena ba pasar en tu vida",user:"katuishi" }}/>
                <Message data = { { me : true,text : "algo buena ba pasar en tu vida",user:"katuishi" }}/>
                <Message data = { { me : true,text : ", algo buena ba pasar en tu vida algo buena ba pasar en tu vida algo buena ba pasar en tu vida algo buena ba pasar en tu vida algo buena ba pasar en tu vida",user:"katuishi" }}/>
                

            </div>
            <div className="container-control">
                <textarea className="inp-msg" cols="5" rows="2" ></textarea>
                <div className="bar"></div>
                <button type="button" className="btn_send">
                    <FontAwesomeIcon icon={icon.faPaperPlane} />
                </button>
            </div>
        </div>
    )
}