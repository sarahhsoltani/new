import { createStore, applyMiddleware,compose } from "redux";
import  userReducer  from "../reducers/userReducer";
import thunk from "redux-thunk";

const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    userReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);


export default store;