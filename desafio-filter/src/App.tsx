import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import ListingBody from './components/home/ListingBody';
import { useState } from 'react';
import { ContextFilter } from './utils/context-filter';

export default function App() {
  const [productCount, setProductCount] = useState(0);

  return (
    <ContextFilter.Provider value={{ productCount, setProductCount }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<ListingBody />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextFilter.Provider>
  );
}
