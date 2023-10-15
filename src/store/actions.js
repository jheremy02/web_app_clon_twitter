import { AUTH_LOGIN, AUTH_LOGOUT, TWEETS_LOAD } from "./types"

export const authLogin=()=>({
    type:AUTH_LOGIN,
})

export const  authLogout=()=>(
    {
        type:AUTH_LOGOUT,
    }
)

export const tweetsLoad=(tweets)=>({
    type:TWEETS_LOAD,
    payload:tweets
})