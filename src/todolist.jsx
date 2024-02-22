import React from "react"
import Todo from './todo';

function Todolist(){
    var[todos,setTodos]=React.useState(["hey","oye"])

    // console.log("todolist")
    var ar=React.useMemo(()=>{return [12,23,34]},[]);
      function addTodo(){
        setTodos([...todos,document.getElementById("d1").value])
      }
       var del=React.useCallback((ind)=>{
        var temp=[...todos]
        temp.splice(ind,1)
        setTodos([...temp])
      },[])

    return (
        <div className="mybox">
            <h1>TODOLIST</h1>
            <input type="text" id="d1"/>
            <button onClick={()=>{addTodo()}}>Add todo</button>
            {
                todos.map((todo,i)=>{
                    return <todo todo={todo} ar={ar} index={i} del={del}></todo>
                    
                })
            }
        </div>
    )
}
export default React.memo(Todolist)