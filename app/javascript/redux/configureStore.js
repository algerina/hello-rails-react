import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import greetingReducer from "./greetings/greetings";

const reducer = combineReducers({
  greetingReducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;