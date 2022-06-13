import { useDebugValue, useEffect, useState } from "react";

export const UseFetch = () => {
  const [loading, response] = useFetch(
    "https://api.github.com/users/cesarhilario"
  );

  const [loading2, response2] = useFetch(
    "https://api.github.com/users/cesarhilarioooooo"
  );

  if (loading) {
    return (
      <div className="page">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>useFetch()</h1>
      {JSON.stringify(response.json, null, 2)}
    </div>
  );
};

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    (async () => {
      const resp = await fetch(url);
      const json = await resp.json();

      setLoading(false);
      setResponse({ json, status: resp.status });
    })();
  }, [url]);

  // useDebugValue("label", (message) => {
  //   return `Mensagem: ${message}`;
  // });

  // View in the React Dev Tols
  useDebugValue(response?.status);

  return [loading, response];
}
