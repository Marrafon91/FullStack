import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import ProductDetails from './routes/ClientHome/ProductDetails';
import ClientHome from './routes/ClientHome';
import AdminHome from './routes/Admin/AdminHome';
import Catalog from './routes/ClientHome/Catalog';
import Cart from './routes/ClientHome/Cart';
import Login from './routes/ClientHome/Login';
import Admin from './routes/Admin';
import * as authService from './services/auth-service';
import * as cartService from './services/cart-service';

import { useState } from 'react';
import { ContextCartCount } from './utils/context-cart';
import { PrivateRoute } from './components/PrivateRoute';
import type { AccessTokenPayloadDTO } from './models/auth';
import { ContextToken } from './utils/context-token';

export default function App() {
  const [contextCartCount, setContextCartCount] = useState<number>(
    () => cartService.getCart().items.length,
  );

  const [contextTokenPayload, setContextTokenPayload] = useState<
    AccessTokenPayloadDTO | undefined> (() => authService.isAuthenticated()
      ? authService.getAccessTokenPayload()
      : undefined,
  );

  return (
    <ContextToken.Provider
      value={{ contextTokenPayload, setContextTokenPayload }}
    >
      <ContextCartCount.Provider
        value={{ contextCartCount, setContextCartCount }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ClientHome />}>
              <Route index element={<Catalog />} />
              <Route path="catalog" element={<Catalog />} />
              <Route
                path="product-details/:productId"
                element={<ProductDetails />}
              />
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route
              path="/admin/"
              element={
                <PrivateRoute roles={['ROLE_ADMIN']}>
                  <Admin />
                </PrivateRoute>
              }
            >
              <Route index element={<AdminHome />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </ContextCartCount.Provider>
    </ContextToken.Provider>
  );
}
