import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1.3);
  }

  return (
    <>
      <h1>Contagem = {count.toFixed(2)}</h1>
      <button onClick={handleClick}>Incrementar</button>
    </>
  );
}
