import "./styles.scss";
import { Link ,NavLink} from "react-router-dom";

const NavBar = () => (
  <nav className="row bg-primary main-nav">
    <div className="col-2">
      <Link to="/" className="nav-logo-text">
        <h4>Meu ICMS</h4>
      </Link>
    </div>

    <div className="col-6 offset-2">
      <ul className="main-menu">
        <li>
          <NavLink to="/" activeClassName="active" exact >CALCULADORA</NavLink>
        </li>
        <li>
          <NavLink to="/admin" activeClassName="active">HISTÓRICO</NavLink>
        </li>
        <li>
          <NavLink to="/catalog" activeClassName="active">MANUAIS</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
