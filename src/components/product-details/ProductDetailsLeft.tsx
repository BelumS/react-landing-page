import { FunctionComponent } from 'react';
import styles from './ProductDetails.module.css';

export const ProductDetailsLeft: FunctionComponent = () => {
  return (
    <aside className={styles["left-details"]}>
      <h4 className={styles["details-header"]}>Lorem ipsum dolor sit.</h4>
      <p className={styles["left-details-text"]}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
        repellendus illo, nemo ut a ullam delectus corporis laboriosam.
      </p>
    </aside>
  );
};
