import quoteMachineReducer from "./reducers/quoteMachineReducer";
import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Create store
const store = legacy_createStore(quoteMachineReducer, applyMiddleware(thunk));

export default store;