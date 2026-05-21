import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import './style.css';

export default function Inscricao() {
  return (
    <main>
      <section>
        <div className="container">
          <Link to="/">
            <h2 className="section-title">Faça sua inscrição!</h2>
          </Link>
          <div className="mt30 mb30">
            <Card title="Pagina de Inscrição" />
          </div>
          <div className="dflex">
            <Link to="/promotion">
              <Button text="Ver promoções" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
