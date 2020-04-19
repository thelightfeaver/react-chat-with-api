import React from "react";
import { Alert } from "../Components/Alert";

export const Default = (props) =>{
    return(
        <div className="container">
            <Alert></Alert>
            {props.children}
        </div>
    )
}