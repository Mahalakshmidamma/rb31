const initialState={
    todos:['rent','gym','office']
}
function todolistReducer(state=initialState,action){
   if(action.type==="ADDTASK"){
       return {...state,todos:[...state.todos,action.payload]}
    }
    return state;
}
export default todolistReducer; 