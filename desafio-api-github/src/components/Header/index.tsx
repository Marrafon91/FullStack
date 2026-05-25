import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
  return (
    <header>
      <div className="main-header-title">
        <div className="ml-40">
          <Link to="/">
            <h1>Github API</h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
