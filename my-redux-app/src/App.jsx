import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
 
  const count = useSelector((state) => state.count);

  
  const dispatch = useDispatch();

  return (
    <div>
      <h1>React + Redux Example</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
    </div>
  );
}

export default App;
