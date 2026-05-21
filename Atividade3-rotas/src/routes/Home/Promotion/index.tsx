import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import './style.css';

export default function Promotion() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mt30 mb30">
            <Card title="Pagina de Promoções" />
          </div>
          <div className="dflex">
            <Link to="/subscription">
              <Button text="Quero me inscrever!" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
