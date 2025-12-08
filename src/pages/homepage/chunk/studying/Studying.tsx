import PlayButton from '@/pages/homepage/chunk/studying/PlayButton';
import Statistics from '@/pages/homepage/chunk/studying/statistics/Statistics';
import UILink from '@/UI/link/UILink';

import StudyingIllustration from '@/assets/homepage/studying/studying-bg.svg?react';

import './Studying.scss';

const Studying = () => {
  return (
    <div className="studying-section">
      <div className="container">
        <div className="studying-content">
          <div className="studying-left">
            <PlayButton />
            <h1 className="studying-title">Enjoy studying with Createx Online Courses</h1>
            <div className="studying-links">
              <UILink isBg={false} whoElem="large" link="about" title="About Us" />
              <UILink isBg={true} whoElem="large" link="courses" title="Export courses" />
            </div>
          </div>
          <div className="studying-illustration">
            <StudyingIllustration />
          </div>
        </div>
        <Statistics />
      </div>
    </div>
  );
};

export default Studying;