
import Button from "../common/Button"
import { logout } from '../auth/LoginPage/service.js';
import { useContext, useEffect, useRef } from "react";
import AuthContext from "./context";
import { Link } from "react-router-dom";
import { authLogout } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
function AuthButton(params) {

    const refButton=useRef(null)
    const isLogged=useSelector(state=>state.auth)
    
    const dispatch=useDispatch()
  async function handleLogoutClick() {

    await logout()
    dispatch(authLogout())
   // onLogout()
    
  }
    
  useEffect(()=>{
    
   
  },[])


    return  isLogged?
        <Button ref={refButton} className="header-button" onClick={handleLogoutClick}>
    Logout
  </Button>:<Link to="/login">
    <Button variant="primary" className="header-button">
    Login
</Button>
  </Link> 
}

export default AuthButton