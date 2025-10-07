// src/App.jsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Example</h1>

      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>

      <h2>User: {name}</h2>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
    </div>
  );
}

export default App;





