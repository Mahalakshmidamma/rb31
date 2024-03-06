import React from "react";
import counterReducer from "./counter.reducer";
import todolistReducer from "./todolist.reducer";
import studentReducer from "./student.reducer";
import {combineReducers} from 'redux'
import countriesReducer from "./countries.reducer";
var reducer=combineReducers({
    counter:counterReducer,
    todolist:todolistReducer,
    students:studentReducer,
    countries:countriesReducer
}) //all data stored in these respectives names
export default reducer;
//we export reducer to use in store.js