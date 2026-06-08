import { useContext } from 'react';
import './style.css';
import { ContextFilter } from '../../../utils/context-filter';

export default function Header() {
  const { productCount } = useContext(ContextFilter);

  return (
    <header className="ds-filter-header">
      <div className="container ds-filter-title">
        <h1>DSFilter</h1>
        <div>{productCount} produto(s)</div>
      </div>
    </header>
  );
}
