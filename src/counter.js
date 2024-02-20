import React from "react"
function Counter(){
         var[c,setC]=React.useState(0)
            function inc(){
                setC(c+1)
            }
            
        function dec(){
            setC(c-1)
        }
        React.useEffect(()=>{
            console.log("hello")
        },[])

        React.useEffect(()=>{
            console.log("happy")
        })
      
      return(
           <div className="mybox">
                 <h1>Counter:{c}</h1>
                 <button onClick={()=>(inc())}>Increment</button>
                 <button onClick={()=>(dec())}>Decrement</button>
           <div id="dd">
                <h1>INCREMENT</h1>
           </div>
        </div>
      )
    }

    export default Counter