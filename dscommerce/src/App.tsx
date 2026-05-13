import './App.css';
import './index.css';
import HeaderClient from './components/HeaderCLient';
import ButtonPrimary from './components/ButtonPrimary';
import ButtonInverse from './components/ButtonInverse';
import ProductDetailsCard from './components/ProductDetailsCard';

function App() {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard />
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
