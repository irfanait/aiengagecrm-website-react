import CheckItem from '../CheckItem/CheckItem';
import styles from './ChecklistBlock.module.css';

/** A small heading followed by a vertical list of check-marked items. */
export default function ChecklistBlock({ heading, items }) {
  return (
    <div>
      {heading && <div className={styles.heading}>{heading}</div>}
      <div className={styles.list}>
        {items.map((item) => (
          <CheckItem key={item} top>
            {item}
          </CheckItem>
        ))}
      </div>
    </div>
  );
}
