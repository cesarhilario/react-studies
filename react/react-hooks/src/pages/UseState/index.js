import { useState } from "react";

export const UseState = () => {
  const [mayState, setMyState] = useState(() => {
    return {
      // You can calls api, access storage, etc. to initialize your state
      initial: "state",
    };
  });
  const [counter, setCounter] = useState(0);

  function handlePlus({ badStateUpdate = false, timeout = false }) {
    if (badStateUpdate) {
      // ! Bad state update when new value has actual state dependency
      setTimeout(() => {
        setCounter(counter + 1);
      }, 2000);

      return;
    }

    if (timeout) {
      setTimeout(() => {
        setCounter((prevState) => prevState + 1);
      }, 2000);
    } else {
      setCounter((prevState) => prevState + 1);
    }
  }

  function handleMinus() {
    setCounter((prevState) => prevState - 1);
  }

  return (
    <div className="page">
      <h1>useState()</h1>
      <h2>{counter}</h2>
      <button onClick={handlePlus}>+</button>
      <button onClick={() => handlePlus({ badStateUpdate: true })}>
        + (B)
      </button>
      <button onClick={() => handlePlus({ timeout: true })}>+ (T)</button>
      <button onClick={handleMinus}>-</button>
    </div>
  );
};
