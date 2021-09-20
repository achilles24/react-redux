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
