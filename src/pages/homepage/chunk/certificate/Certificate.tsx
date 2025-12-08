const certificateIllustration = '/homepage/certificate/certificate-bg.jpg';
const logoImage1 = '/homepage/certificate/certificate-logo-1.png';
const logoImage2 = '/homepage/certificate/certificate-logo-2.png';
const logoImage3 = '/homepage/certificate/certificate-logo-3.png';

import './Certificate.scss';

const Certificate = () => {
  return (
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
  );
};

export default Certificate;