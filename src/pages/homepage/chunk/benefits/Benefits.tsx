import BenefitsButtons from '@/pages/homepage/chunk/benefits/Buttons/BenefitsButtons';

const BenefitsIllustration = '/homepage/benefits/benefits-bg.svg';

import './Benefits.scss';

const Benefits = () => {
  return (
    <div className="benefits-section">
      <div className="container">
        <div>
          <h4 className="subtitle benefits-header">Our benefits</h4>
          <h2 className="title benefits-header">That's how we do it</h2>
          <BenefitsButtons />
          <div className="benefits-content">
            <div className="benefits-text">
              <h3 className="benefits-title">Only practicing tutors</h3>
              <p className="benefits-description">
                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras
                massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam
                diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus
                vehicula.
              </p>
            </div>
            <img src={BenefitsIllustration} alt="Benefits Illustration" className="benefits-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;