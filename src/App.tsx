import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ModalWrapper from '@components/modal/ModalWrapper';

import Homepage from './pages/homepage/Homepage';
import AboutUs from '@/pages/about-us/AboutUs';
import Blog from './pages/blog/Blog';
import Contacts from './pages/contacts/Contacts';
import Course from './pages/course/Course';
import Courses from './pages/courses/Courses';
import Event from './pages/event/Event';
import EventsGridView from './pages/events-grid-view/EventsGridView';
import EventsListView from './pages/events-list-view/EventsListView';
import SinglePost from './pages/single-post/SinglePost';
import NotFound from './pages/not-found/NotFound';

import { IModalProps } from '@/types/modal.types';

export const ModalContext = createContext<IModalProps | null>(null);

function App() {

  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (isOpenModal) document.documentElement.style.overflowY = 'hidden';
    else document.documentElement.style.overflowY = 'visible';
  }, [isOpenModal]);

  return (
    <BrowserRouter>
      <div className={`wrapper flex flex-col justify-between h-full relative`}>
        <ModalWrapper isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
        <ModalContext.Provider value={{ isOpenModal, setIsOpenModal }}>
          <div>
            <Header />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Homepage isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />} >
                <Route path="/register" element={<Homepage isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />} />
                <Route path="/login" element={<Homepage isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />} />
              </Route>
              <Route path="/about" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/course" element={<Course />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/event" element={<Event />} />
              <Route path="/events-grid" element={<EventsGridView />} />
              <Route path="/events-list" element={<EventsListView />} />
              <Route path="/single-post" element={<SinglePost />} />
            </Routes>
          </div>
          <Footer />
        </ModalContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
