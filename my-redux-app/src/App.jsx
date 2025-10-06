import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store/counterSlice";

export default function App() {
  // Step 1: Read data from store
  const count = useSelector((state) => state.counter.count);

  // Step 2: Create dispatcher
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🧮 Redux Counter Example</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>➕ Increment</button>
      <button onClick={() => dispatch(decrement())}>➖ Decrement</button>
      <button onClick={() => dispatch(reset())}>🔁 Reset</button>
    </div>
  );
}

