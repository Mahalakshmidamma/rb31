const initialState={
    alltodos:["get food","pickup"]
}
const todoReducer=function(state=initialState,action){
    if(action.type==="ADDTODO"){
        return{...state,alltodos:[...state.alltodos,action.payload]}
    }
    return state
}
export default todoReducer