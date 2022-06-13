import { useState, useEffect } from "react";

export const UseEffect = () => {
  const [name, setName] = useState("");

  // ! Lifecycle

  // * Called every re-render
  useEffect(() => {
    // console.log("Called each re-render");
  });

  // * Called only once (Component did mount)
  useEffect(() => {
    // console.log("Called only once");
  }, []);

  // * Component will unmount
  useEffect(() => {
    return () => {
      console.log("Will unmount");
    };
  }, []);

  // * Called when the state "name" has been updated
  useEffect(() => {
    console.log("name state updated", name);
  }, [name]);

  // ! Promises
  useEffect(() => {
    fetch("google.com")
      .then((response) => {
        if (response.status === 200) {
          console.log("Connected");
        }
      })
      .catch((error) => {
        console.warn("An error has occurred: \n", error);
      })
      .finally(() => {
        console.log("Calls Ended");
      });
  }, []);

  async function ping() {
    try {
      const result = await fetch("google.com"); // ! { mode: "no-cors" } to connect with https://
      if (result.status === 200) {
        console.log("[Ping] - Connected");
      }
    } catch (error) {
      console.warn("[Ping] An error has occurred: ", error);
    }
  }

  useEffect(() => {
    ping();
  }, []);

  useEffect(() => {
    // IIFE -> Immediately Invoked Function Expression
    (async () => {
      await ping();
    })();
  }, []);

  return (
    <div className="page">
      <h1>useEffect()</h1>
      <h3>
        <em>Open the console</em>
      </h3>
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
};
