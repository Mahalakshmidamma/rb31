import React from "react";
import Todo from "./todo";

function Todolist(){
    var [todos,setTodos]=React.useState([
        // {task:"stay",stats:false},
        // {task:"pickup",stats:false}
    ])
    // console.log(todos);

    function addTodo(){
        var newTodo=document.getElementById("i1");
        var newValue=newTodo.value;
        setTodos([...todos,{task:newValue,stats:false}]);
        // console.log(newTodo)
        newTodo.value=''
        
    }
    function del(ind){
         var temp=[...todos];
         temp.splice(ind,1);
         setTodos([...temp])
    }
    function done(ind){
         var temp=[...todos]
         temp[ind].stats=true;
         setTodos([...temp])
    }
    function undo (ind){
          var temp=[...todos]
          temp[ind].stats=false;
          setTodos([...temp])
    }
    function edit(){
        
    }

    return (

        <div id="maindivpart">
            <div className="mybox">
            <div className="head">
                {/* <div>
                    <span>ALL:</span>
                    <span>COMPLETED:</span>
                    <span>PENDING:</span>
                </div> */}
            </div>
            <div>
                <input type="text" id="i1"/>
                <button onClick={()=>{addTodo()}}>ADD</button>
            </div>
              {
                todos.map((todo,index)=>{
                    return <Todo todo={todo} index={index} del={del} done={done} undo={undo} edit={edit}></Todo>
                })
              }
        </div>
        </div>
    )
}
export default React.memo(Todolist)