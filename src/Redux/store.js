import { createStore, combineReducers } from "redux";
import basketReducer from "./Reducers/basketReducer";
import productReducer from "./Reducers/productReducer";

const rootReducer = combineReducers({
  products: productReducer,
  basket: basketReducer,
});

export default createStore(rootReducer);
