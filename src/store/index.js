import { combineReducers, createStore } from "redux";
import * as reducers  from "./reducers";


const configureStore=(preloadedState)=>{

    const store=createStore(combineReducers(reducers),preloadedState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    
    return store

}


export  default configureStore

