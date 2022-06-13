import { createContext, useContext } from "react";

const ThemeContext = createContext();

export const UseContext = () => {
  return (
    <div className="page">
      <h1>useEffect()</h1>
      <ThemeContext.Provider value={{ mode: "dark" }}>
        <Button />
      </ThemeContext.Provider>
    </div>
  );
};

function Button() {
  const theme = useContext(ThemeContext);

  return <button>{theme?.mode}</button>;
}
