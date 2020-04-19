import { createStore, applyMiddleware,compose } from "redux";
import { chatReducer } from "./Reducer";
import thunk from "redux-thunk";


// Develoment
// export const chatStore = createStore(
//         chatReducer,
//         compose(    
//             applyMiddleware(thunk),
//             window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),        
// );

// production
export const chatStore = createStore(
    chatReducer,
    compose(    
        applyMiddleware(thunk))
        
    
);