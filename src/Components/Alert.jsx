import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icon from "@fortawesome/free-solid-svg-icons"
import { useDispatch, useSelector } from "react-redux";
import { actionType } from "../Redux/typeAction";

export const Alert = _ =>{

    const dispatch = useDispatch()
    const stateAlert = useSelector( state => state.alert)

    const hiddenAlert = _ =>
        dispatch( ()=> dispatch({
            type: actionType.STATE_ALERT,
            payload:{
                title:"",
                visible:"invisible"
            }  
        }))
    

 
    return(
        <div className={"background-modal "+stateAlert.visible}>
            <div className="container-modal">
                <div className="icon">
                    <FontAwesomeIcon icon={Icon.faExclamationCircle}></FontAwesomeIcon>
                </div>
                <p className="title-modal">
                    {stateAlert.title}
                </p>
                <button onClick={()=> hiddenAlert()} className="btn-modal" >
                    Okey
                </button>
            </div>
        </div>
    )
}