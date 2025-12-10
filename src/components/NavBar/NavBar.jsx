import "./NavBar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <i className="fas fa-film"></i>
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
