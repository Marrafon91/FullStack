import { useEffect, useState } from 'react';
import { findProduct } from './data';

export default function App() {
  console.log('Passou no APP');
  const [productId, setProductId] = useState(1);
  const [prod, setProd] = useState<any>();

  useEffect(() => {
    console.log('Passou no UseEffect');
    setProd(findProduct(productId));
  }, [productId]);

  function handleClick() {
    console.log('Passou no handleClick');
    setProductId(2);
  }

  return (
    <>
      <h2>{prod?.name}</h2>
      <p>{prod?.price}</p>
      <br />
      <button onClick={handleClick}>Mudar para Produto 2</button>
    </>
  );
}
