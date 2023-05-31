import classes from './event-item.module.css';

import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import { useRouter } from 'next/router';

function EventItem(props) {
  const router = useRouter();
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

  const detailViewEvent = (id) => {
    router.push(`/events/${id}`)
  }

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />
      <div className={classes.content} onClick={() => detailViewEvent(id)}>
        <div>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{location}</address>
          </div>
        </div>
      </div>
    </li>
  );
}

export default EventItem;