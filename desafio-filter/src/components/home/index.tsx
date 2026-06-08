import { Outlet } from 'react-router-dom';
import './style.css';
import Header from './Header';

export default function Home() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
