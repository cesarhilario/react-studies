import { useCallback, useState } from "react";

const fnCounter = new Set();

export const UseCallback = () => {
  const [counter, setCounter] = useState(0);

  const handlePlus = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  fnCounter.add(handlePlus);
  console.log(fnCounter.size);

  return (
    <div className="page">
      <h1>useCallback()</h1>
      <h2>{counter}</h2>
      <Button onClick={handlePlus} />
    </div>
  );
};

function Button(props) {
  return <button onClick={props.onClick}>+</button>;
}
