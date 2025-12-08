import ListItems from '@/pages/homepage/chunk/advantages/ListItems';
import Statistics from '@/pages/homepage/chunk/studying/statistics/Statistics';
import Team from '@/pages/homepage/chunk/team/Team';
import UILink from '@/UI/link/UILink';

import './AboutUs.scss';

const advantagesIllustration = '/homepage/advantages/advantages-bg.png';
const certificateIllustration = '/homepage/certificate/certificate-bg.jpg';
const logoImage1 = '/homepage/certificate/certificate-logo-1.png';
const logoImage2 = '/homepage/certificate/certificate-logo-2.png';
const logoImage3 = '/homepage/certificate/certificate-logo-3.png';

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="about-page-hero">
        <div className="container">
          <div className="about-breadcrumb">
            <UILink isBg={false} whoElem="regular" link="/" title="Home" />
            <span className="about-breadcrumb-separator">/</span>
            <span className="about-breadcrumb-text">About Us</span>
          </div>
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
            Createx Online School is a leader in online studying. We have lots of courses and programs from the main
            market experts.
          </p>
        </div>
      </div>

      {/* Why Createx Section */}
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

      {/* Statistics Section */}
      <div className="about-statistics">
        <div className="container">
          <Statistics />
        </div>
      </div>

      {/* Certificate Section */}
      <section className="certificate-section">
        <div className="container certificate-content">
          <div className="certificate-text">
            <h4 className="subtitle">Createx Certificate</h4>
            <h2 className="title">Your expertise will be confirmed</h2>
            <p className="certificate-description">
              We are accredited by international professional organizations and institutes:
            </p>
            <div className="certificate-logos">
              <img src={logoImage1} alt="Certificate Logo" />
              <img src={logoImage2} alt="Certificate Logo" />
              <img src={logoImage3} alt="Certificate Logo" />
            </div>
          </div>
          <img className="certificate-illustration" src={certificateIllustration} alt="Certificate Illustration" />
        </div>
      </section>

      {/* Team Section */}
      <Team />
    </div>
  );
};

export default AboutUs;
