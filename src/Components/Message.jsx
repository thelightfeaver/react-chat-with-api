import React from "react";
import { useSelector } from "react-redux";



export const Message = (props) =>{
    
    const user = useSelector(state => state.user)


    return(

            props.data.user === user ?
            (   
                
                <div className="box-message justify-right user-self">
                    <p className="user-name ">{props.data.user}</p>
                    <p className="text-msg">{props.data.text}</p>
                </div>
            )
            : 
            (   
                <div className="box-message  justify-left user-other">
                    <p className="user-name">{props.data.user}</p>
                    <p className="text-msg">{props.data.text}</p>
                </div>
            )
        
        

        
    )
}