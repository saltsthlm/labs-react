import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const Header = () => (
  <nav className="w-full items-center justify-center mb-4">
    <Link to="/">Home</Link>
    {/* <Link to="/about">About</Link> */}

    <Routes>
      <Route path="/about" element={<About />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </nav>
);

export default Header;
