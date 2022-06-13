import { Link } from "react-router-dom";

import "./styles.css";

export const Home = () => {
  return (
    <div id="page-home" className="page">
      <nav className="menu">
        <Link className="menu-item" to="/use-state">
          <span>useState()</span>
        </Link>
        <Link className="menu-item" to="/use-effect">
          <span>useEffect()</span>
        </Link>
        <Link className="menu-item" to="/use-layout-effect">
          <span>useLayoutEffect()</span>
        </Link>
        <Link className="menu-item" to="/use-context">
          <span>useContext()</span>
        </Link>
        <Link className="menu-item" to="/use-reducer">
          <span>useReducer()</span>
        </Link>
        <Link className="menu-item" to="/use-callback">
          <span>useCallback()</span>
        </Link>
        <Link className="menu-item" to="/use-memo">
          <span>useMemo()</span>
        </Link>
        <Link className="menu-item" to="/use-ref">
          <span>useRef()</span>
        </Link>
        <Link className="menu-item" to="/use-imperative-handle">
          <span>useImperativeHandle()</span>
        </Link>
        <Link className="menu-item" to="/use-debug-value">
          <span>useDebugValue()</span>
        </Link>
        <Link className="menu-item" to="/custom-hooks">
          <span>Custom Hooks</span>
        </Link>
      </nav>
    </div>
  );
};
