import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Logo from '@components/logo/Logo';
import Modal from '@components/modal/Modal';
import Navbar from '@components/navbar/Navbar';
import UILink from '@/UI/link/UILink';
import SVGHandler from '@/utilities/SVGHandler';
import useIsCorrectPath from '@/hooks/useCorrectPath';

import Profile from '@/assets/icons/profile-icon.svg?react';

import './Header.scss';

const Header = () => {
  const { pathname } = useLocation();
  const [isCorrectPath, setIsCorrectPath] = useState(false);

  useEffect(() => {
    setIsCorrectPath(useIsCorrectPath(pathname));
  }, [pathname]);

  return (
    <header id="header" className={`header ${isCorrectPath ? 'header-main' : 'header-white'}`}>
      <div className="container">
        <div className="header-container">
          <div className="header-left">
            <Logo />
            <Navbar />
          </div>
          <div className="header-right">
            <div>
              <UILink isBg={true} whoElem="large" link="mailto:martin6175903@yandex.ru" title="Get consultation" />
            </div>
            <div className="header-actions">
              <SVGHandler hoverBG="primary">
                <Profile />
              </SVGHandler>
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;