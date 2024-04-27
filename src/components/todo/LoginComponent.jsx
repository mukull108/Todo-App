import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext'


export default function LoginComponent(){

    const [username, setUsername]= useState('Mukul-Savita')
    const [password, setPassword]= useState('')
    
    // const [showSuccessMessage, setshowSuccessMessage]= useState(false)
    const [showerrorMessage, setshowerrorMessage]= useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    function changeUsername(eventVar){
        setUsername(eventVar.target.value)
    }

    function changePassword(eventVar){
        setPassword(eventVar.target.value)
    }

    async function handleSubmit(){
        if(await authContext.login(username,password)){
            // setshowSuccessMessage(true)
            // setshowerrorMessage(false)
            navigate(`/welcome/${username}`)

        }else{
            setshowerrorMessage(true)
            // setshowSuccessMessage(false)
        }
    }
    return(
        <div className="Login">
            <h1>Time to login!</h1>
            {/* {showSuccessMessage && <div className='successMessage'> Authentication Successfully Completed </div>} */}
            {showerrorMessage && <div className='errorMessage'> Authentication Failed, check your credentials</div>}
            
            <div>
                <label>User Name:</label>
                <input type="text" name = "username" value={username} onChange={changeUsername}/>
            </div>

            <div>
                <label>Password:</label>
                <input type="password" name = "password" value={password} onChange={changePassword}/>
            </div>

            <div>
                <button type = "button" name="login" onClick={handleSubmit}> Login </button>
            </div>
        </div>
    )
}