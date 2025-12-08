import { Link } from 'react-router-dom';

import UILink from '@/UI/link/UILink';

import './EventsGridView.scss';

const EventsGridView = () => {
  const events = [
    {
      day: 5,
      month: 'August',
      time: '11:00 - 14:00',
      title: 'Formation of the organizational structure of the company in the face of uncertainty.',
      subtitle: 'Online master-class',
      link: '/event',
    },
    {
      day: 24,
      month: 'July',
      time: '11:00 – 12:30',
      title: 'Building a customer service department. Best Practices.',
      subtitle: 'Online lecture',
      link: '/event',
    },
    {
      day: 16,
      month: 'July',
      time: '10:00 – 13:00',
      title: 'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
      subtitle: 'Online workshop',
      link: '/event',
    },
    {
      day: 10,
      month: 'September',
      time: '14:00 – 16:00',
      title: 'Digital Marketing Trends 2024: What You Need to Know',
      subtitle: 'Online webinar',
      link: '/event',
    },
    {
      day: 8,
      month: 'September',
      time: '15:00 – 17:00',
      title: 'Advanced React Patterns and Best Practices',
      subtitle: 'Online workshop',
      link: '/event',
    },
    {
      day: 3,
      month: 'September',
      time: '12:00 – 14:00',
      title: 'UX/UI Design Principles for Modern Web Applications',
      subtitle: 'Online master-class',
      link: '/event',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="events-page-hero">
        <div className="container">
          <div className="events-breadcrumb">
            <UILink isBg={false} whoElem="regular" link="/" title="Home" />
            <span className="events-breadcrumb-separator">/</span>
            <span className="events-breadcrumb-text">Events</span>
          </div>
          <h1 className="events-page-title">Our Events</h1>
          <p className="events-page-description">
            Join our online lectures, workshops, and master-classes to expand your knowledge and skills.
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="events-page-grid">
        <div className="container">
          <div className="events-grid-container">
            {events.map((event, index) => (
              <Link key={index} to={event.link} className="event-grid-card">
                <div className="event-grid-date">
                  <div className="event-grid-day">
                    <div className="event-grid-day-number">{event.day}</div>
                    <div className="event-grid-month">{event.month}</div>
                  </div>
                </div>
                <div className="event-grid-time">{event.time}</div>
                <h3 className="event-grid-title">{event.title}</h3>
                <p className="event-grid-subtitle">{event.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsGridView;
