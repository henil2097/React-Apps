import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from './auth';

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});

export default store;

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increament') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'decreament') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.value,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'toggle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter,
//         }
//     }
//     return state;
// }

// const store = createStore(counterReducer);

// export default store;