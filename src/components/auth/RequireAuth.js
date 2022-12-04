
import { useContext } from "react";
import { Navigate ,useLocation } from "react-router-dom";
import AuthContext from "./context";

function RequireAuth ({isLogged , children}) {

    
    const location=useLocation()
    console.log(location)

    if (!isLogged) {
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    } else {

        return children

    }

}

const ConectedRequireAuth = (props)=> {

    const {isLogged}=useContext(AuthContext)
    console.log(isLogged)
    return <RequireAuth isLogged={isLogged} {...props}>

    </RequireAuth>

}

export default ConectedRequireAuth