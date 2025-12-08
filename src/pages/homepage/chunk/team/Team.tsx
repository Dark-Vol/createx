import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import TeamItems from '@/pages/homepage/chunk/team/TeamItems';

// Import Swiper styles
// @ts-ignore
import 'swiper/css';

import './Team.scss';

const Team = () => {
  const swiper = useSwiper();

  return (
    <section className="team-section">
      <div className="container">
        <h4 className="subtitle">Best tutors are all here</h4>
        <h2 className="title">Meet our team</h2>
        <div className="team-wrapper">
          <div className="team-controls">
            <button onClick={() => swiper.slidePrev()} className="team-button">
              <ArrowLeft />
            </button>
            <button onClick={() => swiper.slideNext()} className="team-button">
              <ArrowRight />
            </button>
          </div>
          <Swiper spaceBetween={50} slidesPerView={1}>
            <SwiperSlide>
              <TeamItems />
            </SwiperSlide>
            <SwiperSlide>
              <TeamItems />
            </SwiperSlide>
            <SwiperSlide>
              <TeamItems />
            </SwiperSlide>
            <SwiperSlide>
              <TeamItems />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;