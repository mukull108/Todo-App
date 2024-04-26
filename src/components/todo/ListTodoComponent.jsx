import { useEffect, useState } from "react";
import { retrieveUserAllTodosApi, deleteTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ListTodosComponent() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 10, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)

    const authContext = useAuth()
    const username = authContext.username;

    const navigate = useNavigate()
    // const todos = [ {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
    //                 {id: 2, description: 'Learn Full Stack Dev',  done: false, targetDate: targetDate},
    //                 {id: 3, description: 'Learn DevOps',  done: false, targetDate: targetDate},
    //             ]

    useEffect(() => refreshTodos(), [])

    function refreshTodos() {
        retrieveUserAllTodosApi(username)
            .then(response => {
                console.log(response.data)
                setTodos(response.data)
            })
            .catch(error => console.log(error))
    }

    function deleteTodo(id) {
        console.log('clicked ' + id)
        deleteTodoApi(username, id)
            .then(() => {
                //we will successfull response then we will want to 2 thing
                // 1: display the message
                // 2: update the todos list
                setMessage(`ID= ${id} Deleted Successfully`)
                refreshTodos()
            })
            .catch(error => console.log(error))

    }

    function updateTodo(id) {
        console.log('update clicked ' + id)
        navigate(`/todo/${id}`)

    }

    function addNewTodo(id) {
        navigate(`/todo/-1`)
    }

    return (
        <div className="container">
            <h1> Things You Want To Do! </h1>
            {message && <div className="alert alert-warning"> {message} </div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            {/* <td>ID</td> */}
                            <th>Description</th>
                            <th>Is Done ?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        {/* <td>{todo.id}</td> */}
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        {/* <td>{todo.targetDate.toDateString()}</td> */}
                                        <td>{todo.targetDate.toString()}</td>
                                        <td> <button className="btn btn-warning"
                                            onClick={() => deleteTodo(todo.id)}>
                                            Delete
                                        </button>
                                        </td>
                                        <td> <button className="btn btn-success"
                                            onClick={() => updateTodo(todo.id)}>
                                            Update
                                        </button>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
            <button className="btn btn-success m-3" onClick={addNewTodo}>Add New Todo</button>
        </div>
    )
}