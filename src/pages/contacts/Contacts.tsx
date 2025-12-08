import { MapPin, Phone, Mail } from 'lucide-react';

import UILink from '@/UI/link/UILink';
import UIInput from '@/UI/form/input/UIInput';
import UIButton from '@/UI/form/button/UIButton';

import './Contacts.scss';

const Contacts = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="contacts-page-hero">
        <div className="container">
          <div className="contacts-breadcrumb">
            <UILink isBg={false} whoElem="regular" link="/" title="Home" />
            <span className="contacts-breadcrumb-separator">/</span>
            <span className="contacts-breadcrumb-text">Contacts</span>
          </div>
          <h1 className="contacts-page-title">Contacts</h1>
          <p className="contacts-page-description">
            We are always happy to help. Contact us and we will get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="contacts-content">
        <div className="container">
          <div className="contacts-grid">
            {/* Contact Info */}
            <div>
              <h2 className="contacts-info-title">Get in touch</h2>
              <p className="contacts-info-description">
                We are always happy to help. Contact us and we will get back to you as soon as possible.
              </p>
              <div className="contacts-info-list">
                <div className="contacts-info-item">
                  <div className="contacts-info-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="contacts-info-content-title">Address</h3>
                    <p className="contacts-info-content-text">2464 Royal Ln. Mesa, New Jersey 45463</p>
                  </div>
                </div>
                <div className="contacts-info-item">
                  <div className="contacts-info-icon">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="contacts-info-content-title">Phone</h3>
                    <a href="tel:+74055550128" className="contacts-info-content-link">
                      (405) 555-0128
                    </a>
                  </div>
                </div>
                <div className="contacts-info-item">
                  <div className="contacts-info-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="contacts-info-content-title">Email</h3>
                    <a href="mailto:hello@createx.com" className="contacts-info-content-link">
                      hello@createx.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="contacts-form">
                <UIInput
                  placeholderText="Your name"
                  typeInput="text"
                  isRequired={true}
                  nameInput="name"
                  register={{} as any}
                  errors={{}}
                />
                <UIInput
                  placeholderText="Your email"
                  typeInput="email"
                  isRequired={true}
                  nameInput="email"
                  register={{} as any}
                  errors={{}}
                />
                <UIInput
                  placeholderText="Your phone"
                  typeInput="tel"
                  nameInput="phone"
                  register={{} as any}
                  errors={{}}
                />
                <textarea
                  className="contacts-form-textarea"
                  placeholder="Your message"
                  rows={6}
                />
                <UIButton title="Send message" isSubmit={true} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
