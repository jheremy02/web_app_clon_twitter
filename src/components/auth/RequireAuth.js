
import { useContext } from "react";
import { Navigate ,useLocation } from "react-router-dom";
import AuthContext from "./context";
import { getIsLogged } from "../../store/selectors";
import { connect } from "react-redux";

function RequireAuth ({isLogged , children}) {

    
    const location=useLocation()
    

    if (!isLogged) {
        return <Navigate to="/login" state={{from:location}} replace></Navigate>
    } else {

        return children

    }

}

const mapStateToProps=(state)=>{
    return {
        isLogged:getIsLogged(state)
    }
}

const ConectedRequireAuth = connect(mapStateToProps)(RequireAuth)

export default ConectedRequireAuth