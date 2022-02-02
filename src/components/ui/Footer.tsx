import { FunctionComponent } from 'react';
import styles from './Footer.module.css';

export const Footer: FunctionComponent = () => {
  return (
    <footer className={styles['landing-footer']}>
      <span className={styles['landing-text']}>&copy; 2021</span>
    </footer>
  );
};
