import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className="list-none">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
