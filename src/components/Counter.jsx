import React from "react";
import { connect } from "react-redux";
function Counter(props){
    // console.log(props)
 // in console obj there-counter inside count prst so having value 0 in output
    
       function inc(){
        props.dispatch({type:'INC'})
       }
       function dec(){
        props.dispatch({type:'DEC'})
      }
      function reset(){
        props.dispatch({type:'RESET'})
      }
    return(
     <div className="betterview">
        <h1>COUNTER</h1><hr></hr>
        <h1>Count:{props.counter.count}</h1> 
        <button onClick={inc}>Increment</button>&nbsp;&nbsp;&nbsp;
        <button onClick={dec}>Decrement</button>&nbsp;&nbsp;&nbsp;
        <button onClick={reset}>Reset</button>&nbsp;&nbsp;&nbsp;
  
     </div>
    )
}
export default connect(function(store){return store}) (Counter)