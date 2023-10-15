import { AUTH_LOGIN, AUTH_LOGOUT, TWEETS_LOAD } from "./types";

const defaultState = {
  auth: false,
  tweets: [],
};

/*
    const reducer=(state=defaultState,action)=>{

    switch (action.type) {

        case AUTH_LOGIN :
            
            return {...state,auth:true}

        case AUTH_LOGOUT :
            
            return {...state,auth:false}

        case TWEETS_LOAD :
            
            return {...state,tweets:action.payload}
    
        default:
            return state
    }
}
*/

//desglozamos el estado y reducer  global  en partes mas manejables

export const auth = (state = defaultState.auth, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return true;

    case AUTH_LOGOUT:
      return false;

    default:
      return state;
  }
};

export const tweets = (state = defaultState.tweets, action) => {
  switch (action.type) {
    case TWEETS_LOAD:
      return action.payload;

    default:
      return state;
  }
};
