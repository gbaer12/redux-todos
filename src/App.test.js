import { render, screen } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import App from "./App";

const store = createStore(rootReducer);

test("renders App", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
