import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import './style.css';

export default function SearchUser() {
  return(
    <main>
      <section className="container">
        <div className="ml-40 main-content">
          <h1>Encontre um perfil Github</h1>
          <form>
            <input type="text" placeholder="Usuário Github"/>
          </form>
        </div>
        <Button text="Encontrar" to="/"/>
      </section>
    </main>
  );
}
