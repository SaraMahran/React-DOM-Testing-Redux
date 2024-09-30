import { createStore } from "redux";
import { increment, decrement } from "../actions";
import counterReducer from "../store/";

describe("Redux Store Tests", () => {
  let store;

  beforeEach(() => {
    store = createStore(counterReducer);
  });

  test("should return the initial state", () => {
    const state = store.getState();
    expect(state).toEqual({ count: 0 });
  });

  test("should handle INCREMENT action", () => {
    store.dispatch(increment());
    const state = store.getState();
    expect(state.count).toBe(1);
  });

  test("should handle DECREMENT action", () => {
    store.dispatch(decrement());
    const state = store.getState();
    expect(state.count).toBe(-1);
  });
});
