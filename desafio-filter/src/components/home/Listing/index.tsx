import './style.css';
import type { ProductDTO } from '../../../models/ProductDTO';

type Props = {
  products: ProductDTO[];
};

export default function Listing({ products }: Props) {
  return (
    <div className="container ds-listing-content">
      {products.length === 0 ? (
        <span>Nenhum produto encontrado</span>
      ) : (
        products.map((product) => (
          <div className="ds-listing-sub-content" key={product.id}>
            <p>{product.name}</p>
            <h3>R$ {product.price.toFixed(2)}</h3>
          </div>
        ))
      )}
    </div>
  );
}
