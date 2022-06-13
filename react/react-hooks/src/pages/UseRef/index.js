import { useEffect, useRef } from "react";

// ! DO NOT USE THE ORDER OF THIS FILE

export const UseRef = () => {
  console.log("rendered");

  // * Store value that can be changed inside component without unnecessary renders
  const number = useRef(0);

  function handleSetValue() {
    const newNumber = Math.round(Math.random() * (10 - 1) + 1);
    number.current = newNumber;
  }

  function handlePrintValue() {
    alert(number.current);
  }

  // * Imperative access of the elements from tree

  const inputRef = useRef(null);

  function handlePrintName() {
    alert(inputRef.current.value);
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="page">
      <h1>useRef()</h1>
      <button onClick={handleSetValue}>Set Value</button>
      <button onClick={handlePrintValue}>Print Value</button>
      <br />
      <br />
      <br />
      {/* Imperative access of the elements from tree  */}
      <input ref={inputRef} />
      <button onClick={handlePrintName}>Print Name</button>
    </div>
  );
};
