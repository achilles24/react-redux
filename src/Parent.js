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
