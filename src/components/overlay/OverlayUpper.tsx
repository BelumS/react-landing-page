import { FunctionComponent } from 'react';
import styles from './Overlay.module.css';

export const OverlayUpper: FunctionComponent = props => {
  return (
    <aside className={styles["overlay-text"]}>
      <h2 className={styles["overlay-header"]}>
        Kantini
        <br />
        Ya Nyeusi
      </h2>

      {props.children}
    </aside>
  );
};
