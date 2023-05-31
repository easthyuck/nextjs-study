import { Fragment, useState } from "react";
import { getAllEvents, getFilteredEvents } from "../../data/dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";

function AllEventsPage() {
  const [events, setEvents] = useState(getAllEvents());

  function findEventHandler(event) {
    setEvents(getFilteredEvents(event));
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler} />
      {events ? (<EventList items={events} />): (<div>not events</div>)}
    </Fragment>
  );
}

export default AllEventsPage;