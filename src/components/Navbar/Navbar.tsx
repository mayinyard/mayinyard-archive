import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/mayinyard-archive/#archive">
        Archive
      </a>

      <Link to="/projects/lost-metal-souls">
        Projects
      </Link>

      <Link to="/about">
        About
      </Link>

      <Link to="/contact">
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;