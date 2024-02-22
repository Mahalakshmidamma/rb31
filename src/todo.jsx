import React from "react"

function Todo(props){
    console.log("Todo::"+props.todo)
    return(
             <li>
                    {props.todo}
                     <button onClick={()=>{props.del(props.index)}}>DEL</button>
                     <button>UNDO</button>
                    <button>DONE</button>
              </li>
       
    )
}
export default React.memo(Todo)