import React from 'react' 
function Counter(){
    var [count,setCount]=React.useState(0)
    const inc=()=>{
        setCount(count+1)
    }
    function dec() {
        setCount(count-1)
    }
  return (
    <>
    <h1>Counter Component</h1>
    <span>{count}</span>
    <button onClick={inc}>inc</button>
    <button onClick={dec}>dec</button>

    </>
  )  
}
export default Counter
