import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import ListingBody from './components/home/ListingBody';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<ListingBody />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
