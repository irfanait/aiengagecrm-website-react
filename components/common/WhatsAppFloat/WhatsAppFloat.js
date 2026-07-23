import Image from 'next/image';
import styles from './WhatsAppFloat.module.css';

/** Fixed-position WhatsApp button shown bottom-right on every page. */
export default function WhatsAppFloat() {
  return (
    <a href="https://wa.me/+919183440213" className={styles.float} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
      <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={35} height={35} />
    </a>
  );
}
