const initialState={
    count:0
}
//updation 
function counterReducer(state=initialState,action){
    
if(action.type==='INC'){
    return {...state,count:state.count+1}
    // console.log('state',state)
    // console.log('action',action)
}
if(action.type==='DEC'){
    return {...state,count:state.count-1}
    // console.log('state',state)
    // console.log('action',action)
}
if(action.type==='RESET'){
    return {...state,count:state.count=0}
    // console.log('state',state)
    // console.log('action',action)
}
     return state
}
export default counterReducer; 