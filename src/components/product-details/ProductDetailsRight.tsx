import { FunctionComponent } from 'react';
import styles from './ProductDetails.module.css';

export const ProductDetailsRight: FunctionComponent = () => {
  return (
    <aside className={styles["right-details"]}>
      <h4 className={styles["details-header"]}>Lorem</h4>
      <p className={styles["right-details-text"]}>Lorem ipsum.</p>
    </aside>
  );
};
