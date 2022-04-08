import { Link } from "react-router-dom";

import './styles.css';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => {
  return (
    <nav className="navbar bg-primary main-nav">
      <Link to="/" className="nav-liink-text">
        <h4>Github API</h4>
      </Link>
    </nav>
  );
};

export default Navbar;
