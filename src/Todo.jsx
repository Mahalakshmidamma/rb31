import react from 'react'

function Todo(todo,i,del){
    return (
        <li>{todo}
       <button onClick={()=>{del(i)}}>Delete</button>
        </li>
    )
}
export default Todo