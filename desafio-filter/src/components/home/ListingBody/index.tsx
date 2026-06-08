import { useContext, useEffect, useState } from 'react';
import Filter from '../Filter';
import Listing from '../Listing';
import { findByPrice } from '../../../services/product-service';
import type { ProductDTO } from '../../../models/ProductDTO';
import { ContextFilter } from '../../../utils/context-filter';

export default function ListingBody() {
  const [products, setProducts] = useState<ProductDTO[]>(
    findByPrice(0, Number.MAX_VALUE),
  );

  const { setProductCount } = useContext(ContextFilter);

  useEffect(() => {
    setProductCount(products.length);
  }, [products, setProductCount]);

  function handleFilter(min?: number, max?: number) {
    const result = findByPrice(min ?? 0, max ?? Number.MAX_VALUE);

    setProducts(result);
  }

  return (
    <main>
      <section className="container">
        <div className="ds-filter-main">
          <Filter onFilter={handleFilter} />
        </div>

        <Listing products={products} />
      </section>
    </main>
  );
}
