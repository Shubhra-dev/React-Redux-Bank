import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import accountReducer from "../accounts/accountSlice";
import customerReducer from "./customerSlice";

const rootReducer = combineReducers({
  accounts: accountReducer,
  customers: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
