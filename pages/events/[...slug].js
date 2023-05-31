import { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../data/dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";

function FilteredEventesPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading</p>
  }

  const filteredEvent = filterData[0];

  const filteredEvents = getFilteredEvents({
    type: filteredEvent
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>no events found</p>;
  }

  const date = new Date(numYear);

  return (
    <div>
      <ResultsTitle date={numYear} />
      <EventList items={filteredEvents} />
    </div>
  )
}

export default FilteredEventesPage;