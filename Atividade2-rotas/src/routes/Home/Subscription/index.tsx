import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import './style.css';

export default function Subscription() {
  return (
    <main>
      <section>
        <div className="container">
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
