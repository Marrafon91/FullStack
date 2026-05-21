import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <Link to="/">
          <h1>MeuSite</h1>
        </Link>
      </div>
    </header>
  );
}
