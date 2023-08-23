import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; 
import ViewReducer from "./reducers/viewReducer";

const rootReducer=combineReducers({
    view: ViewReducer,
})

const store=createStore(rootReducer,applyMiddleware(thunk))

export default store;

