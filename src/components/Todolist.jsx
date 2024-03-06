import React from "react";
import { connect } from "react-redux";
import { addTodo,deleteTodo } from "../store/actions";
function Todolist(props){
    const [newtask,setNewtask]=React.useState('')
    function addTask(){
        // props.dispatch({type:"ADDTASK",payload:newtask})       // direct method
        props.dispatch(addTodo(newtask))                         //by using separate 'action' file
    }
    function deleteTask(i){
        // props.dispatch({type:"DELETETASK",payload:i})   
        props.dispatch(deleteTodo(i))      
    }
    return(
     <div className="betterview">
        <h1>TODOLIST</h1>
        <input type="text" onChange={(e)=>{setNewtask(e.target.value)}}/>
         <button onClick={addTask}>Add Task</button>
        {
        props.todolist.todos.map((t,i)=>{
          return (
            <li key={i}>
                {t}
                <button onClick={()=>{deleteTask(i)}}>DELETE</button>
                </li>
          )
        })
        }
        </div>
    )
}
export default connect(function(store){return store}) (Todolist)