import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nidNumber: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nidNumber) {
        return {
          payload: { fullName, nidNumber },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nidNumber = action.payload.nidNumber;
        state.createdAt = new Date().toISOString();
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;
// export default function customerReducer(state = initialState, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nidNumber: action.payload.nidNumber,
//         createdAt: new Date().toISOString(),
//       };
//     case "customer/updateName":
//       return { ...state, fullName: action.payload };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nidNumber) {
//   return { type: "customer/createCustomer", payload: { fullName, nidNumber } };
// }

// export function updateName(fullName) {
//   return { type: "customer/updateName", payload: fullName };
// }
