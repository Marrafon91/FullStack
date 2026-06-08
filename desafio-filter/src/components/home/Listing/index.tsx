import './style.css';
import type { ProductDTO } from '../../../models/ProductDTO';

type Props = {
  products: ProductDTO[];
};

export default function Listing({ products }: Props) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>R$ {product.price}</p>
        </div>
      ))}
    </div>
  );
}
