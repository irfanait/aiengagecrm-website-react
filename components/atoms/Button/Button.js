'use client';

import { Button as AntButton } from 'antd';
import Icon from '../Icon/Icon';
import styles from './Button.module.css';

const VARIANT_CLASS = {
  primary: styles.primary,
  dark: styles.dark,
  outlineDark: styles.outlineDark,
  outline: styles.outline,
  outlineOnDark: styles.outlineOnDark,
};

/**
 * Pill-shaped CTA button used throughout the site. Wraps antd Button so it inherits
 * antd's a11y/keyboard behavior, styled via CSS Modules to match the design pixel-for-pixel.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  shadow = false,
  className = '',
  ...rest
}) {
  const classes = [
    styles.btn,
    size === 'lg' ? styles.lg : styles.md,
    VARIANT_CLASS[variant] || styles.primary,
    shadow ? styles.primaryShadow : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <AntButton href={href} className={classes} {...rest}>
      {children}
      {icon && <Icon name={icon} size={17} />}
    </AntButton>
  );
}

export function LinkButton({ children, href = '#', icon = 'arrow_forward', className = '', ...rest }) {
  return (
    <a href={href} className={`${styles.link} ${className}`.trim()} {...rest}>
      {children}
      <Icon name={icon} size={17} />
    </a>
  );
}
