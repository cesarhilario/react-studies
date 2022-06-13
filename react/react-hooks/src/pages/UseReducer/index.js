import { useReducer } from "react";

/**
 * ! Structure
 * * const reducer = useReducer(
 * *  function reducer(state, action) {},
 * *  "Cesar",
 * *  function initializer(initialValue) {
 * *   return {
 * *    name: "César",
 * *   };
 * *  }
 * * );
 */

function reducer(state, action) {
  // console.log(action);
  switch (action.type) {
    case "plus":
      return {
        counter: state.counter + 1,
        clicks: state.clicks + 1,
      };
    case "minus":
      return {
        counter: state.counter - 1,
        clicks: state.clicks + 1,
      };
    default:
      return state;
  }
}

const intitalValue = {
  counter: 0,
  clicks: 0,
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, intitalValue);

  function handlePlus() {
    dispatch({ type: "plus" });
  }

  function handleMinus() {
    dispatch({ type: "minus" });
  }

  return (
    <div className="page">
      <h1>useReducer()</h1>
      <h2>{state.counter}</h2>
      <h3>Cliques: {state.clicks}</h3>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
};
