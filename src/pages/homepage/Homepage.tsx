import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { IModalProps } from '@/types/modal.types';
import Advantages from '@/pages/homepage/chunk/advantages/Advantages';
import Benefits from '@/pages/homepage/chunk/benefits/Benefits';
import Certificate from '@/pages/homepage/chunk/certificate/Certificate';
import Courses from '@/pages/homepage/chunk/courses/Courses';
import Events from '@/pages/homepage/chunk/events/Events';
import Studying from '@/pages/homepage/chunk/studying/Studying';
import Team from '@/pages/homepage/chunk/team/Team';

const Homepage = ({ setIsOpenModal }: IModalProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/login' || pathname === '/register') {
      setIsOpenModal(true);
    }
  }, [pathname, setIsOpenModal]);

  return (
    <div>
      <Studying />
      <Advantages />
      <Courses />
      <Benefits />
      <Events />
      <Certificate />
      <Team />
    </div>
  );
};

export default Homepage;