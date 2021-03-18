import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateMachineProvider, createStore } from "little-state-machine";
import store from "./store";

// create out global form state
createStore(store);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* provide out global form state to App component */}
    <StateMachineProvider>
      <App />
    </StateMachineProvider>
  </StrictMode>,
  rootElement
);
