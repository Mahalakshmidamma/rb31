import React from "react";

function Todolist() {
    var [arr, setArr] = React.useState(["omega", "alpha", "beta"])
    function abc() {
        // var k = document.getElementById("d1").value
        console.log(arr)
        setArr([...arr, document.getElementById("d1").value])
    }
    return (
        <div className="mainBody">
            <h1>TODOLIST</h1>
            <input type="text" id="d1" />
            <button onClick={abc}>ADD HERE</button>
            {
                arr.map((a)=> {
                    return (
                    <li>{a}</li>
                    )
                })
            }
        </div>
    )
}

export default Todolist