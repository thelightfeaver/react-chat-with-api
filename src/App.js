import React from "react"
import {Chat} from "./Components/Chat"
import { Route, BrowserRouter, Switch} from "react-router-dom"
import { Signup } from "./Components/Signup";
import "./Style.scss";
import { Default } from "./Layout/Default";

export const App = _ =>{
    return(
        <BrowserRouter pathname={window.location.pathname} > 
            <Switch>
                <Default>
                    <Route exact path="/chat" component={Chat} />
                    <Route exact path="/" component={Signup} />
                </Default>
            </Switch>
        </BrowserRouter>
    )
}

