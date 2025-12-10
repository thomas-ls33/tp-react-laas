import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <i className="fas fa-film"></i>
      </Link>
      <ul>
        <li>
          <a>Films</a>
        </li>
        <li>
          <a>Séries</a>
        </li>
        <li>
          <a>Populaires</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
