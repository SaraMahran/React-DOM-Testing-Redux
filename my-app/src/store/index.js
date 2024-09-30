import { createStore } from "redux";

// Initial state
const initialState = {
  count: 0,
};

// Reducer function to handle actions
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 }; // Spread previous state
    case "DECREMENT":
      return { ...state, count: state.count - 1 }; // Spread previous state
    default:
      return state;
  }
};

// Create and export store
const store = createStore(counterReducer);

// Export the reducer and the store
export default store;
export { counterReducer }; // This is already a function
