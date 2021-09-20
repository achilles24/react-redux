# react-redux
Created with CodeSandbox
Based on React & react-redux

store.js

import { createStore } from "redux";

let initialState = { count: 0, title: "Redux counter" };
const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, count: state.count + action.payload };
    case "Decrement":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(reducers);

export default store;
********************************************************************************************

App.js

import { Provider, useSelector } from "react-redux";
import store from "./store";
import Parent from "./Parent";
import "./styles.css";

function App() {
  const { title, count } = useSelector((state) => state);
  return (
    <div className="App">
      <h1>{title}</h1>
      <h2>{count}</h2>
      <Parent />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
***********************************************************************************************

Parent.js

import { useDispatch } from "react-redux";

const Parent = () => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "Increment", payload: 5 });
  };

  const decrement = () => {
    dispatch({ type: "Decrement" });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Parent;
