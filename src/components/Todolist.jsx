import React from "react";
import { connect } from "react-redux";
function Todolist(props){
    const [newtask,setNewtask]=React.useState('')
    function addTask(){
        props.dispatch({type:"ADDTASK",payload:newtask})
    }
    return(
     <div className="betterview">
        <h1>TODOLIST</h1>
        <input type="text" onChange={(e)=>{setNewtask(e.target.value)}}/>
         <button onClick={addTask}>Add Task</button>
        {
        props.todolist.todos.map((t,i)=>{
          return (
            <li key={i}>{t}</li>
          )
        })
        }
        </div>
    )
}
export default connect(function(store){return store}) (Todolist)