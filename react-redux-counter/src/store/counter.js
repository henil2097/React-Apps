import { createSlice } from "@reduxjs/toolkit";

// createSlice is an alternative and powerful way to write reducers and return states
const initialCounterState = {counter: 0, showCounter: true};
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increament(state) {
            state.counter++;
        },
        decreament(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;