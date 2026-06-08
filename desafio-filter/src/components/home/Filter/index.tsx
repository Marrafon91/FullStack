import { useState } from 'react';
import './style.css';

type FormData = {
  min?: number;
  max?: number;
};

type Props = {
  onFilter: (min?: number, max?: number) => void;
};

export default function Filter({ onFilter }: Props) {
  const [formData, setFormData] = useState<FormData>({
    min: undefined,
    max: undefined,
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value === '' ? undefined : Number(value),
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onFilter(formData.min, formData.max);
  }

  return (
    <form className="container ds-filter-content" onSubmit={handleSubmit}>
      <input
        className="ds-filter-input"
        name="min"
        value={formData.min ?? ''}
        type="number"
        placeholder="Preço mínimo"
        onChange={handleInputChange}
      />

      <input
        className="ds-filter-input"
        name="max"
        value={formData.max ?? ''}
        type="number"
        placeholder="Preço máximo"
        onChange={handleInputChange}
      />

      <button className="ds-filter-btn" type="submit">
        Filtrar
      </button>
    </form>
  );
}
