import React from 'react'
import {connect} from 'react-redux'

function Counter(props){
    console.log(props)
    return (
        <div className="mybox">
            <h1>Counter:{props.counter.count}</h1>
            <button onClick={()=>{props.dispatch({type:'INCREMENT'})}}>INCREMENT</button>
        </div>
    )
}
export default connect((store)=>{
    return store
})(Counter)