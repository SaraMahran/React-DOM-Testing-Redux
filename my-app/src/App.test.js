import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";
import counterReducer from "./store"; // Import your reducer

test("renders Redux Counter App with initial content", () => {
  const store = createStore(counterReducer); // Create the store
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Update the test to match content that exists
  const headingElement = screen.getByText(/Redux Counter App/i);
  expect(headingElement).toBeInTheDocument();

  const counterElement = screen.getByText(/Count: 0/i);
  expect(counterElement).toBeInTheDocument();

  const incrementButton = screen.getByText(/Increment/i);
  expect(incrementButton).toBeInTheDocument();

  const decrementButton = screen.getByText(/Decrement/i);
  expect(decrementButton).toBeInTheDocument();
});
