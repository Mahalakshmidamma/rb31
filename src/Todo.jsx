import react from 'react'

function Todo({todo,del,i}){
    return (
        <li>{todo}
       <button onClick={()=>{del(i)}}>Delete</button>
        </li>
    )
}
export default Todo