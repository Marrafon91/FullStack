import { Link, NavLink } from 'react-router-dom';
import './style.css';
import homeImg from '../../assets/Home.png'

export default function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <nav className="nav-list">
          <ul className="nav-items mt20 mb20">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'menu-active' : '')}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? 'menu-active' : '')}
              >
                Produtos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'menu-active' : '')}
              >
                Sobre nós
              </NavLink>
            </li>
          </ul>
          <div className="home-img  mt20 mb20">
            <Link to="/">
            <img src={homeImg} alt="Home" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
