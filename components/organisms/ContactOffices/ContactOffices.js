import styles from './ContactOffices.module.css';

/** Bordered box listing office addresses on the Contact Us hero. */
export default function ContactOffices({ items }) {
  return (
    <div className={styles.box}>
      <div className={styles.label}>Office</div>
      {items.map((o) => (
        <div key={o.name} className={styles.office}>
          <div className={styles.name}>{o.name}</div>
          <div className={styles.address}>{o.address}</div>
        </div>
      ))}
    </div>
  );
}
