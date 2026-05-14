import Card from '../../components/Card';
import Header from '../../components/Header';
import './style.css'

export default function Catalog() {
  return (
    <>
    <Header />
    <main>
      <section className="ds-carrs-section">
        <h2 className="ds-carrs-subtitle">Venha nos visitar</h2>
        <div>
            <Card />
        </div>
        </section>
    </main>
    </>
  );
}
