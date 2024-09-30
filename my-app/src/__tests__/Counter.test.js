import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { counterReducer } from "../store/index";
import Counter from "../components/Counter";

describe("Counter Component Tests", () => {
  let store;

  beforeEach(() => {
    store = createStore(counterReducer);
  });

  test("renders Counter component with initial state", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    expect(getByText(/Count: 0/i)).toBeInTheDocument();
  });

  test("increments count when Increment button is clicked", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const incrementButton = getByText(/Increment/i);
    fireEvent.click(incrementButton);
    expect(getByText(/Count: 1/i)).toBeInTheDocument();
  });

  test("decrements count when Decrement button is clicked", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    const decrementButton = getByText(/Decrement/i);
    fireEvent.click(decrementButton);
    expect(getByText(/Count: -1/i)).toBeInTheDocument();
  });
});
