import { Link } from "react-router-dom";

export const UseDebugValue = () => {
  return (
    <div className="page">
      <Link className="menu-item" to="/custom-hooks">
        <span>Go To Fetch Custom Hook</span>
      </Link>
    </div>
  );
};
