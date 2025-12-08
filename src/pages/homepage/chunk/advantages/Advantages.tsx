import ListItems from '@/pages/homepage/chunk/advantages/ListItems';
import UILink from '@/UI/link/UILink';

const advantagesIllustration = '/homepage/advantages/advantages-bg.png';

import './Advantages.scss';

const Advantages = () => {
  return (
    <div className="advantages-section">
      <div className="container">
        <div className="advantages-content">
          <div className="advantages-image">
            <img src={advantagesIllustration} alt="Advantages Illustration" />
          </div>
          <div className="advantages-text">
            <h4 className="subtitle">Who we are</h4>
            <h2 className="title">Why Createx?</h2>
            <ListItems />
            <UILink isBg={true} whoElem="regular" link="about" title="More about us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;