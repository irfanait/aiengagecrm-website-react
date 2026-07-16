import styles from './Container.module.css';

export default function Container({ children, className = '', as: Tag = 'div', ...rest }) {
  return (
    <Tag className={`${styles.container} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
