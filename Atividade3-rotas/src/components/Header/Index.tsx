import { Link, NavLink } from 'react-router-dom';
import './style.css';

export default function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <nav className="nav-list">
          <div>
            <Link to="/">
              <h1>MeuSite</h1>
            </Link>
          </div>
          <ul className="nav-items">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'menu-active' : '')}
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/promotion"
                className={({ isActive }) => (isActive ? 'menu-active' : '')}
              >
                Promoções
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/subscription"
                className={({ isActive }) => (isActive ? 'menu-active' : '')}
              >
                Inscrição
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
