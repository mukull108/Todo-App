import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './LogoutComponent'
import LoginComponent from './LoginComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodoComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'
import AuthProvider, { useAuth } from './security/AuthContext'
import UpdateTodoComponent from './UpdateTodoComponent'


function AuthenticatedRoute({children}){
    const authContext = useAuth()

    if(authContext.isAuthenticated){
        return children
    }
    return <Navigate to="/"/>
}
export default function TodoApp(){
    return(
        <div className="App">

            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent></HeaderComponent>
                    <Routes>
                        <Route path='/' element={<LoginComponent/>}></Route>
                        <Route path='/login' element={<LoginComponent/>}></Route>
                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent/>
                            </AuthenticatedRoute>
                        } />
                        
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent/>
                            </AuthenticatedRoute>
                        } />

                        <Route path='/todo/:id' element={
                            <AuthenticatedRoute>
                                <UpdateTodoComponent/>
                            </AuthenticatedRoute>
                        } />

                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent/>
                            </AuthenticatedRoute>
                        } />

                        <Route path='*' element={<ErrorComponent/>}></Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
            
        </div>
    )
}


