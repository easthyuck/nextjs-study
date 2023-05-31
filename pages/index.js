import { getRecommendEvents } from '../data/dummy-data';
import EventList from '../components/events/event-list';

function HomePage() {
  const recommendEvents = getRecommendEvents();

  return (
    <div>
      <EventList items={recommendEvents} />
    </div>
  );
}

export default HomePage;