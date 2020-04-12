import React from "react"
import { Route, BrowserRouter, Switch} from "react-router-dom"
import { NewUser } from "./Components/NewUser";

export const App = _ =>{
    return(
        <BrowserRouter pathname={window.location.pathname} >
            <Switch>
                <Route path="/" component={NewUser} />
            </Switch>
        </BrowserRouter>
    )
}

