import React from "react";

function Todo({todo,index,del,done,undo,edit}){
    // console.log("Todo")
    return (
        <div className="listDiv">
            
                  <li style={{textDecoration:todo.stats?"line-through":"none"}}>
                
                  {todo.task} 

                  <button className="btn btn-danger m-2" onClick={()=>(del(index))}>Delete</button>
                  <button className="btn btn-success m-2" onClick={()=>(done(index))}>Done</button>
                  <button className="btn btn-warning m-2" onClick={()=>(undo(index))}>Undo</button>
                  <button className="btn btn-primary m-2" onClick={()=>(edit(index))}>Edit</button> 

          </li>
            

        </div>
    )
}
export default React.memo(Todo);