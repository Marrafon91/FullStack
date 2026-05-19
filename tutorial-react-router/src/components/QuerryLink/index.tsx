import { NavLink, useLocation, type NavLinkProps } from 'react-router-dom';

export default function QueryLink({ to, ...props }: NavLinkProps) {
  const location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}
