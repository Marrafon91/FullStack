import { Link } from 'react-router-dom';
import './style.css';
import ButtonInverse from '../../../components/ButtonInverse';
import ButtonPrimary from '../../../components/ButtonPrimary';

export default function ProductForm() {
  return (
     <main>
      <section id="product-form-section" className="dsc-container">
        <div className="dsc-product-form-container">
          <form className="dsc-card dsc-form">
            <h2>Dados do produto</h2>
            <div className="dsc-form-controls-container">
              <div>
                <input className="dsc-form-control" type="text" placeholder="Nome" />
              </div>
              <div>
                <input className="dsc-form-control" type="text" placeholder="Preço" />
              </div>
              <div>
                <input className="dsc-form-control" type="text" placeholder="Imagem" />
              </div>
            </div>

            <div className="dsc-product-form-buttons">
              <Link to="/admin/products">
              <ButtonInverse text="Cancelar"/>
              </Link>
              <ButtonPrimary text="Salvar"/>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
