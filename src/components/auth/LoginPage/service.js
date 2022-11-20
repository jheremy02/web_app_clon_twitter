import client, { setAuthorizationHeader,removeAuthorizationHeader} from "../../../api/client.js";
import { storage } from "../../../utils/storage.js";

export const login= ({username,password})=>{
    return   client.post('/auth/login',{username,password}).then((response)=>{
        setAuthorizationHeader(response.accessToken)
        storage.set('auth', response.accessToken);
    })

}

export const logout= ()=>{
    
    return Promise.resolve().then(()=>{
        removeAuthorizationHeader()
    storage.remove("auth")
    })
    
}