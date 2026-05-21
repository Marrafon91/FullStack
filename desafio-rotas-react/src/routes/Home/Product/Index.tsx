import { NavLink, Outlet } from 'react-router-dom';
import './style.css';

export default function Product() {
  return (
    <main>
      <section className="container">
        <div className="main-content mt20">

          <nav className="nav-list-products">
            <ul className="nav-items mt20 mb20">

              <li>
                <NavLink
                  to="computadores"
                  className={({ isActive }) =>
                    isActive ? 'menu-active' : ''
                  }
                >
                  Computadores
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="eletronicos"
                  className={({ isActive }) =>
                    isActive ? 'menu-active' : ''
                  }
                >
                  Eletrônicos
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="livros"
                  className={({ isActive }) =>
                    isActive ? 'menu-active' : ''
                  }
                >
                  Livros
                </NavLink>
              </li>

            </ul>
          </nav>

          {/* SUB CONTEÚDO */}
          <Outlet />

        </div>
      </section>
    </main>
  );
}
