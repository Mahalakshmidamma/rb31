import React from "react";

function Todolist() {
    var [arr, setArr] = React.useState(["durga", "sandeep", "vasarla"])
    function abc() {
        var k = document.getElementById("d1").value
        console.log(k)
        setArr(...arr, document.getElementById("d1").value)
    }
    return (
        <div>
            <h1>TODO</h1>
            <input type="text" id="d1" />
            <button onClick={abc}>ADD HERE</button>
            {
                arr.map((a)=> {
                    return <li>{a}</li>
                })
            }
        </div>
    )
}

export default Todolist