import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Features/accounts/accountSlice";
import customerReducer from "./Features/customers/customerSlice";

const store = configureStore({
  reducer: {
    accounts: accountReducer,
    customers: customerReducer,
  },
});
export default store;
