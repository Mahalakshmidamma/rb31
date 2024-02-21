import React from "react";

function Todo({todo,index,del}){
    console.log("todos")
    return (
        <div className="listDiv">
            <li style={{textDecoration:todo.stats?"line-through":"none"}}>
                {/* <div className="eachDiv"> */}
                    {todo.task} 
                    <button onClick={()=>(del(index))}>Delete</button>

                {/* </div> */}

            </li>

        </div>
    )
}
export default React.memo(Todo);