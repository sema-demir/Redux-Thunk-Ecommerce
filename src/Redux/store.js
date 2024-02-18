import { createStore, combineReducers, applyMiddleware } from "redux";
import basketReducer from "./Reducers/basketReducer";
import productReducer from "./Reducers/productReducer";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
  products: productReducer,
  basket: basketReducer,
});
//thunk arayazılımını store adahil et
export default createStore(rootReducer, applyMiddleware(thunk));
