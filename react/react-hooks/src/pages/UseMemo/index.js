import { useState, useMemo } from "react";

export const UseMemo = () => {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");

  const total = useMemo(() => {
    console.log("Executed!!");
    return counter * 4543254 * 432418 * 6387912;
  }, [counter]);

  function handlePlus() {
    setCounter((prevState) => prevState + 1);
  }

  return (
    <div className="page">
      <h1>useMemo()</h1>
      <h2>{counter}</h2>
      <h3>{total}</h3>
      <button onClick={handlePlus}>+</button>
      <br />
      <br />
      <p>{name}</p>
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
};
