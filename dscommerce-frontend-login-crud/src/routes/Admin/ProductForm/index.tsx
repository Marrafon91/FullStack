import './style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import * as forms from '../../../utils/forms';
import ButtonInverse from '../../../components/ButtonInverse';
import ButtonPrimary from '../../../components/ButtonPrimary';
import FormInput from '../../../components/FormInput';

export default function ProductForm() {
  const [formData, setFormData] = useState<any>({
    name: {
      value: '',
      id: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Nome',
    },
    price: {
      value: '',
      id: 'price',
      name: 'price',
      type: 'number',
      placeholder: 'Preço',
    },
    imgUrl: {
      value: '',
      id: 'imgUrl',
      name: 'imgUrl',
      type: 'text',
      placeholder: 'Imagem',
    },
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData(forms.update(formData, event.target.name, event.target.value));
  }

  return (
    <main>
      <section id="product-form-section" className="dsc-container">
        <div className="dsc-product-form-container">
          <form className="dsc-card dsc-form">
            <h2>Dados do produto</h2>
            <div className="dsc-form-controls-container">
              <div>
                <FormInput
                  {...formData.name}
                  className="dsc-form-control"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <FormInput
                  {...formData.price}
                  className="dsc-form-control"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <FormInput
                  {...formData.imgUrl}
                  className="dsc-form-control"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="dsc-product-form-buttons">
              <Link to="/admin/products">
                <ButtonInverse text="Cancelar" />
              </Link>
              <ButtonPrimary text="Salvar" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
