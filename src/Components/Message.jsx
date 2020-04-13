import React from "react";

export const Message = (props) =>{
    


    return(

            props.data.me ?
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