import './style.css';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ButtonInverse from '../../../components/ButtonInverse';
import ButtonPrimary from '../../../components/ButtonPrimary';
import FormInput from '../../../components/FormInput';
import FormTextArea from '../../../components/FormTextArea';
import * as forms from '../../../utils/forms';
import * as productService from '../../../services/product-service';
import * as categoryService from '../../../services/category-service';
import type { CategoryDTO } from '../../../models/category';
import FormSelect from '../../../components/FormSelect';

export default function ProductForm() {
  const params = useParams();

  const isEditing = params.productId !== 'create';

  const [categories, setCategories] = useState<CategoryDTO[]>([]);

  const [formData, setFormData] = useState<any>({
    name: {
      value: '',
      id: 'name',
      name: 'name',
      type: 'text',
      placeholder: 'Nome',
      validation: function (value: string) {
        return /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,80}$/.test(value);
      },
      message:
        'Favor informar um nome de 3 a 80 caracteres, o nome não pode conter numeros',
    },
    price: {
      value: '',
      id: 'price',
      name: 'price',
      type: 'number',
      placeholder: 'Preço',
      validation: function (value: number) {
        return value > 0;
      },
      message: 'Favor informar um valor positivo',
    },
    imgUrl: {
      value: '',
      id: 'imgUrl',
      name: 'imgUrl',
      type: 'text',
      placeholder: 'Imagem',
    },
    description: {
      value: '',
      id: 'description',
      name: 'description',
      type: 'text',
      placeholder: 'Deixe uma descriçaõ',
      validation: function (value: string) {
        return /^.{10,}$/.test(value);
      },
      message: 'A descriçaõ deve ter no minimo 10 caracteres',
    },
    categories: {
      value: [],
      id: 'categories',
      name: 'categories',
      placeholder: 'Categorias',
      validation: function (value: CategoryDTO[]) {
        return value.length > 0;
      },
      message: 'Escolha 1 categoria',
    },
  });

  useEffect(() => {
    categoryService.findAllRequest().then((response) => {
      setCategories(response.data);
    });
  }, []);

  useEffect(() => {
    if (isEditing) {
      productService.findById(Number(params.productId)).then((response) => {
        const newFormData = forms.updateAll(formData, response.data);
        setFormData(newFormData);
      });
    }
  }, []);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData(
      forms.updateAndValidate(formData, event.target.name, event.target.value),
    );
  }

  function handleTurnDirty(name: string) {
    setFormData(forms.dirtyAndValidate(formData, name));
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
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className="dsc-form-error">{formData.name.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.price}
                  className="dsc-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className="dsc-form-error">{formData.price.message}</div>
              </div>
              <div>
                <FormInput
                  {...formData.imgUrl}
                  className="dsc-form-control"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <FormSelect
                  {...formData.categories}
                  options={categories}
                  onChange={(obj: any) => {
                    const newFormData = forms.updateAndValidate(formData,'categories',obj);
                    console.log(newFormData.categories)
                    setFormData(newFormData);
                  }}
                  onTurnDirty={handleTurnDirty}
                  isMulti
                  getOptionLabel={(obj: any) => obj.name}
                  getOptionValue={(obj: any) => String(obj.id)}
                />
              </div>
              <div>
                <FormTextArea
                  {...formData.description}
                  className="dsc-form-control dsc-textarea"
                  onTurnDirty={handleTurnDirty}
                  onChange={handleInputChange}
                />
                <div className="dsc-form-error">
                  {formData.description.message}
                </div>
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
