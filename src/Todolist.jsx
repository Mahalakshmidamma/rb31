import React from 'react'
import Todo from './Todo'

function Todolist(){
    var [todos,setTodos]=React.useState(['play music','send off to praveen'])
    var [newtodo,setNewtodo]=React.useState('')

    var del=React.useCallback(function del(i){
     var temp=[...todos]
     temp.splice(i,1)
     setTodos([...temp])
    },[])
   

    return (
        <div>
            <h1>TODOLIST</h1>
            <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
            <button onClick={()=>{setTodos([...todos,newtodo])}}>ADD</button>
            <ul>
                {
                    todos?.map((todo,i)=>{
                        return <Todo i={i} todo={todo} del={del}></Todo>
                    })
                }
            </ul>
        </div>
    )
}
export default Todolist
