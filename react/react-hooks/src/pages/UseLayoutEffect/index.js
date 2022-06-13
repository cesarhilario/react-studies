import { useEffect, useState, useLayoutEffect } from "react";

export const UseLayoutEffect = () => {
  const [counter, setCounter] = useState(0);

  useLayoutEffect(() => {
    for (let i = 0; i < 5000; i++) {
      console.log(i);
    }
  }, [counter]);

  useEffect(() => {
    console.log("useEffect 1");
  }, []);

  useEffect(() => {
    console.log("useEffect 2");
  }, []);

  useEffect(() => {
    console.log("useEffect 3");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }
  return (
    <div className="page">
      <h1>useLayoutEffect()</h1>
      <h2>{counter}</h2>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};
