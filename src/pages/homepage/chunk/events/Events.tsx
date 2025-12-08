import EventsItems from '@/pages/homepage/chunk/events/EventsItems';
import UILink from '@/UI/link/UILink';

import './Events.scss';

const Events = () => {
  return (
    <section className="events-section">
      <div className="container">
        <div className="events-header">
          <h4 className="subtitle">Our Events</h4>
          <h2 className="title">Lectures & workshops</h2>
        </div>
        <EventsItems />
        <div className="events-footer">
          <p className="events-footer-text">Do you want more?</p>
          <UILink isBg={true} whoElem="large" link="events" title="Explore all events" />
        </div>
      </div>
    </section>
  );
};

export default Events;