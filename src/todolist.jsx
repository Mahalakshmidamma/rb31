import React from "react";

function Todolist() {
    var [todos, setTodos] = React.useState(["omega", "alpha", "beta"])
    function abc() {
        // var k = document.getElementById("d1").value
        console.log(todos)
        setTodos([...todos, document.getElementById("d1").value])
    }
    function del(ind){
        var temp=[...todos]
        temp.splice(ind,1)
        setTodos([...temp])
    } 
    return (
        <div className="mainBody">
            <h1>TODOLIST</h1>
            <input type="text" id="d1" />
            <button onClick={abc}>ADD HERE</button>

            {
                todos.map((todo,index)=> {
                    return (
                        <li>
                            {todo}
                            <button onClick={()=>{del(index)}}>DELETE</button>
                             <button>DONE</button>
                             <button>UNDO</button>

             </li>
                    )
                   
                })
            }
        </div>
    )
}

export default Todolist