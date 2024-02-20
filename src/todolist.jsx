import React from "react"
function Todolist(){
    var[todos,setTodos]=React.useState(["hey","oye"])
    return(
        <div className="mybox">
            <h1>TODOLIST</h1>
            <input type="text" id="d1"/>
            <button>Add todo</button>
            {
                todos.map((todo)=>{
                    return (
                        <li>{todo}</li>
                    )
                })
            }
        </div>
    )
}
export default Todolist