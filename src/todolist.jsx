import React from "react";
import Todo from "./todo";

function Todolist(){
    var [todos,setTodos]=React.useState([])
    console.log("hihi");

    function addTodo(){
        var newTodo=document.getElementById("i1").value;
        setTodos([...todos,{task:newTodo,stats:false}]);
    }
    function del(ind){
         var temp=[...todos];
         temp.splice(ind,1);
         setTodos([...temp])
    }
    return (
        <div className="mybox">
            <div className="head">
                {/* <div>
                    <span>ALL</span>
                    <span>COMPLETED</span>
                    <span>PENDING</span>
                </div> */}
            </div>
            <div>
                <input type="text" id="i1"/>
                <button onClick={()=>{addTodo()}}>ADD</button>
            </div>
              {
                todos.map((todo,index)=>{
                    return <Todo todo={todo} index={index} del={del} ></Todo>
                })
              }
        </div>
    )
}
export default React.memo(Todolist)