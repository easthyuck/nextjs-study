import { useRef } from 'react';
import Button from '../ui/button';
import classes from './event-search.module.css';

function EventSearch(props) {
  const eventRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedEvent = eventRef.current.value;

    props.onSearch(selectedEvent);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="event">EVENT</label>
          <select id="event" ref={eventRef}>
            <option value="">ALL</option>
            <option value="football">FOOTBALL</option>
            <option value="baseball">BASEBALL</option>
            <option value="tennis">TENNIS</option>
            <option value="basketball">BASKETBALL</option>
          </select>
        </div>
      </div>
      <Button>Find</Button>
    </form>
  );
}

export default EventSearch;