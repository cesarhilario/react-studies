import { Link } from "react-router-dom";

export const CustomHooks = () => {
  return (
    <div id="page-custom-hooks" className="page">
      <nav className="menu">
        <Link className="menu-item" to="/custom-hooks/use-fetch">
          <span>useFetch()</span>
        </Link>
      </nav>
    </div>
  );
};
