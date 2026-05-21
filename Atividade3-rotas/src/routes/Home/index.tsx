import './style.css';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Index';

export default function Home() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
