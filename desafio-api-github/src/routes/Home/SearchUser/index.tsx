import Button from '../../../components/Button';
import './style.css';

export default function SearchUser() {
  return (
    <main>
      <section className="container">
        <div className="ml-40 main-content-search">
          <h2 className="ml-40">Encontre um perfil Github</h2>
          <form>
            <input className="ml-40" type="text" placeholder="Usuário Github" />
          </form>
          <Button text="Encontrar" to="/" />
        </div>
      </section>
    </main>
  );
}
