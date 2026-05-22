import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './routes/Home';
import HomeBody from './routes/Home/HomeBody/Index';
import NotFound from './routes/Home/NotFound/Index';

import Product from './routes/Home/Product/Index';
import Computadores from './routes/Home/Product/Computadores';

import About from './routes/Home/About/Index';
import Eletronicos from './routes/Home/Product/Eletronicos';
import Livros from './routes/Home/Product/Livros';
import { computadores, eletronicos, livros } from './services/data';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeBody />} />
          <Route path="products" element={<Product />}>
            <Route path="computadores" element={<Computadores computadores={computadores} />} />
            <Route path="eletronicos" element={<Eletronicos eletronicos={eletronicos}/>} />
            <Route path="livros" element={<Livros livros={livros} />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
