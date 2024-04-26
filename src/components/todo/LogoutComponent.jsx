import { useAuth } from "./security/AuthContext"

export default function LogoutComponent(){
    return(
        <div className="LogoutComponent">
            <h1> You are logged out! </h1>
            <div>
                Thanks for using App.
            </div>
        </div>
    )
}