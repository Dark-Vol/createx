import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Logo from '@components/logo/Logo';
import Navbar from '@components/navbar/Navbar';
import Modal from '@components/modal/Modal';
import UILink from '@/UI/link/UILink';
import SVGHandler from '@/utilities/SVGHandler';
import useIsCorrectPath from '@/hooks/useCorrectPath';

import Profile from '@public/icons/profile-icon.svg?react';

const Header = () => {
  const { pathname } = useLocation();
  const [isCorrectPath, setIsCorrectPath] = useState(false);

  useEffect(() => {
    setIsCorrectPath(useIsCorrectPath(pathname));
  }, [pathname]);

  return (
    <header id="header" className={`py-5 ${isCorrectPath ? 'bg-main' : 'bg-white'}`}>
      <div className="container">
        <div className="flex justify-between text-base">
          <div className="flex items-center">
            <Logo />
            <Navbar />
          </div>
          <div className="flex gap-9 items-center">
            <div>
              <UILink isBg={true} whoElem="large" link="mailto:martin6175903@yandex.ru" title="Get consultation" />
            </div>
            <div className="flex gap-2 items-center">
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