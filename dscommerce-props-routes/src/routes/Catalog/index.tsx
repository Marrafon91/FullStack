import './style.css';
import HeaderClient from '../../components/HeaderClient';
import SearchBar from '../../components/SearchBar';
import CatalogCard from '../../components/CatalogCard';
import ButtonNextPage from '../../components/ButtonNextPage';
import type { ProductDTO } from '../../models/product';

const product: ProductDTO = {
  id: 2,
  name: 'Smart Tv',
  description: 'Esta TV e muito bonita',
  imgUrl:
    'https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/2-big.jpg?raw=true',
  price: 5000.0,
  categories: [
    {
      id: 2,
      name: 'Eletronicos',
    },
    {
      id: 3,
      name: 'Computadores',
    },
    {
      id: 4,
      name: 'Importados',
    },
  ],
};

export default function Catalog() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />
          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
            <CatalogCard product={product} />
          </div>
          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
