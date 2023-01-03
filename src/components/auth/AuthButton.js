
import Button from "../common/Button"
import { logout } from '../auth/LoginPage/service.js';
import { useContext, useEffect, useRef } from "react";
import AuthContext from "./context";
import { Link } from "react-router-dom";
function AuthButton(params) {

    const refButton=useRef(null)
    const {isLogged,handleLogout:onLogout}=useContext(AuthContext)

  async function handleLogoutClick() {

    await logout()
    onLogout()
    
  }
    
  useEffect(()=>{
    
    console.log(refButton.current)
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