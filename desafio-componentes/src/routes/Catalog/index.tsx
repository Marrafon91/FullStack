import Card from '../../components/Card';
import Comments from '../../components/Comments';
import Footer from '../../components/Footer';
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
          <h2>O que estão dizendo</h2>
          <div className="ds-carrs-comments-container">
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
          </div>
        </section>
    </main>
    <footer>
      <div className="ds-carrs-footer-container">
        <Footer />
      </div>
    </footer>
    </>
  );
}
