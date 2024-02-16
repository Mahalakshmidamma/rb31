import React from "react"
// function Counter(){
//     var[c,setC]=React.useState(0)
//         function inc(){
//             setC(c+1)
//         }
        
//     function dec(){
//         setC(c-1)
//     }
  
//   return(
//        <div>
//              <h1>Counter:{c}</h1>
//              <button onClick={()=>(inc())}>Increment</button>
//              <button onClick={()=>(dec())}>Decrement</button>

//     </div>
//   )
// }


function Counter(x){
    var[c,setC]=React.useState(x.cvaluestarts)

        function inc(){
            setC(c+x.cinc)
    
        }
        
    function dec(){
        setC(c-x.cinc)

    }

  
  return(
       <div>
             <h1>{x.cname}:{c}</h1>
        
            
             <button onClick={()=>(inc())}>Increment</button>
             <button onClick={()=>(dec())}>Decrement</button>

    </div>
  )
}
export default Counter