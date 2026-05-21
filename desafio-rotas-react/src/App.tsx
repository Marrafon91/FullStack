import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import HomeBody from './routes/Home/HomeBody/Index';
import NotFound from './routes/Home/NotFound/Index';
import Product from './routes/Home/Product/Index';
import About from './routes/Home/About/Index';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
        <Route index element ={<HomeBody />} />
        <Route path="products" element ={<Product />} />
        <Route path="about" element ={<About />} />
        <Route path="*" element ={<NotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
