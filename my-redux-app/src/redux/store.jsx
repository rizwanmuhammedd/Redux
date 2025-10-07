
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import counterReducer from "./counterReducer.jsx";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const logger = (store) => (next) => (action) => {
  console.log("Dispatching:", action);
  const result = next(action);
  console.log("Next State:", store.getState());
  return result;
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);
