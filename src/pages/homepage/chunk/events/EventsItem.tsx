import UILink from '@/UI/link/UILink';
import { EventsItemTypes } from '@/types/homepage/events/eventsItem.types';

import './EventsItem.scss';

const EventsItem = ({ event }: EventsItemTypes) => {
  const { day, month, time, title, subtitle } = event;

  return (
    <div className="event-card">
      <div className="event-card-date">
        <h2 className="event-card-day">{day}</h2>
        <div className="event-card-month-info">
          <h5 className="event-card-month">{month}</h5>
          <p className="event-card-time">{time}</p>
        </div>
      </div>
      <div className="event-card-details">
        <h3 className="event-card-title">{title}</h3>
        <h4 className="event-card-subtitle">{subtitle}</h4>
      </div>
      <div>
        <UILink isBg={false} whoElem="regular" link="events" title="View more" />
      </div>
    </div>
  );
};

export default EventsItem;