import EventItem from "./event-item";
import classes from './event-list.module.css';

function EventList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map(({ id, title, location, date, image, schedule}) => (
        <EventItem key={id} id={id} title={title} location={location} date={date} image={image} />
      ))}
    </ul>
  )
}

export default EventList;