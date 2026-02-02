import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const style = {
    fontWeight: "bold",
    textDecoration: "underline",
    backgroundColor: "lightblue",
    display: "flex",
    gap: "10px",
    padding: "10px",
    justifyContent: "center",
    // maxWidth:'400px'
  };
  return (
    <div>
      <nav style={style} className="site-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Contact
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Users
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Posts
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
