import React from "react";
import { render } from "@testing-library/react";
import TodoList from "./TodoList";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./rootReducer";
import App from "./App";

const store = createStore(reducer);

it("renders without crashing", function () {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const h1Element = getByText(/Todos:/i);
  expect(h1Element).toBeInTheDocument();
});
