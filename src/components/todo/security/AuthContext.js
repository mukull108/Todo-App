import { createContext, useContext, useState } from "react";
import { executebasicAuthenticationService } from "../api/HelloWorldApiService";

//1: create a context
export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

//2: share the created contex with other components
export default function AuthProvider({children}){

    //3: put some state in the context
    // const [number,setNumber] = useState(10)

    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username,setUsername] = useState(null)


    // const valuesToBeShared = {number, isAuthenticated, setAuthenticated}

    // function login(username, password){
    //     if(username ==="Mukul-Savita" && password==="dummy"){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true;

    //     }else{
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false;
    //     }
    // }

    function login(username, password){
        const baToken = 'Basic ' + window.btoa(username + ":" + password)
        executebasicAuthenticationService(baToken)
        .then(response => console.log(response))
        .catch(error => console.log(error))
        
        setAuthenticated(false)
        // if(username ==="Mukul-Savita" && password==="dummy"){
        //     setAuthenticated(true)
        //     setUsername(username)
        //     return true;

        // }else{
        //     setAuthenticated(false)
        //     setUsername(null)
        //     return false;
        // }
    }
    
    function logout(){
        setAuthenticated(false)
    }
    return(
        <AuthContext.Provider value={ {isAuthenticated, login, logout, username} }>
            {children}
        </AuthContext.Provider>
    )
}
