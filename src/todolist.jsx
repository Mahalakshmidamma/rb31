import React from "react";

function Todolist() {
    var [arr, setArr] = React.useState(["omega", "alpha", "beta"])
    function abc() {
        // var k = document.getElementById("d1").value
        console.log(arr)
        setArr([...arr, document.getElementById("d1").value])
    }
    function del(ind){
        var temp=[...arr]
        temp.splice(ind,1)
        setArr([...temp])
    } 
    return (
        <div className="mainBody">
            <h1>TODOLIST</h1>
            <input type="text" id="d1" />
            <button onClick={abc}>ADD HERE</button>

            {
                arr.map((a,index)=> {
                    return (
                    <li>{a}
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