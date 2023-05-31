import { Fragment } from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../data/dummy-data';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import Button from '../../components/ui/button';

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>not found event</p>
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.imageAlt} />
      <EventContent>
        <p>{event.description}</p>
        <Button>Buy Ticket</Button>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;