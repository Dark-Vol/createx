import { Link, useLocation } from 'react-router-dom';

import './NavbarLink.scss';

interface NavbarLinkProps {
  title: string;
  link: string;
}

const NavbarLink = ({ title, link }: NavbarLinkProps) => {
  const location = useLocation();
  const isActive = `/${link}` === location.pathname;

  return (
    <Link to={link} className={`navbar-link ${isActive ? 'navbar-link-active' : 'navbar-link-inactive'}`}>
      {title}
    </Link>
  );
};

export default NavbarLink;