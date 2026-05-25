import Button from '../../../components/Button';
import './style.css';

export default function HomeBody() {
  return (
    <main>
      <section className="container">
        <div className="ml-40 main-content">
          <h2>Desafio Github API</h2>
          <h3>DevSuperior - Escola de programação</h3>
        </div>
          <Button text="Começar" to="/search"/>
      </section>
    </main>
  );
}
