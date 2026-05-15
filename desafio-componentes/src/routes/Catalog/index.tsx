import Card from '../../components/Card';
import Header from '../../components/Header';
import './style.css'

export default function Catalog() {
  return (
    <>
    <Header />
    <main className="ds-carrs-main-content">
      <section className="ds-carrs-section-card">
        <h2 className="ds-carrs-subtitle">Venha nos visitar</h2>
        <div className="ds-carrs-card-content">
            <Card />
            <Card />
        </div>
        </section>

        <section className="ds-carrs-section-comments">

        </section>
    </main>
    </>
  );
}
