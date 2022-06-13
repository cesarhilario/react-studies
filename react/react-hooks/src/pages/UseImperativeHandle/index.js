// * Imperative functional components access

import { forwardRef, useRef, useImperativeHandle } from "react";

export const UseImperativeHandle = () => {
  const formRef = useRef(null);

  function handleSubmit() {
    formRef.current.submit();
  }

  return (
    <div className="page">
      <h1>useImperativeHandle()</h1>
      <div>
        <Form ref={formRef} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

const Form = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  function handleSubmit() {
    alert(inputRef.current.value);
  }

  useImperativeHandle(
    ref,
    () => {
      return {
        submit: handleSubmit,
      };
    },
    []
  );

  return (
    <form>
      <input ref={inputRef} />
    </form>
  );
});
