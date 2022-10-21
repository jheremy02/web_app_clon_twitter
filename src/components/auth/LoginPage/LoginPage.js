import { useState } from "react";
import Button from "../../common/Button";

function LoginPage() {
    
const [credentials,setCredentials] = useState({username:'', password:''})

function handleChanges(event) {
    
    setCredentials((credentials)=>({...credentials,[event.target.name]:event.target.value}))

}


    return (
        <div className="loginPage">
            <h1 className="loginPage-title">Login in to Twitter </h1>
            <form>
                <input type="text" name="username" value={credentials.username} onChange={handleChanges}></input>
                <input type="password" name="password" value={credentials.password} onChange={handleChanges}></input>
                <Button type="submit" variant="primary">
                    Log in
                </Button>
            </form>
        </div>
    )
}

export default LoginPage