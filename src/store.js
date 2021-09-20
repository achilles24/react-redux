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
