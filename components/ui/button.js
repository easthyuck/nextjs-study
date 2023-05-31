import Link from 'next/link';
import classes from './button.module.css';

function Button(props) {
  if (props.link) {
    return (
      <div className={classes.btn}>
        <Link href={props.link}>
          {props.children}
        </Link>
      </div>
    );
  }

  return <button className={classes.btn} onClick={props.onClick}>{props.children}</button>
}

export default Button;