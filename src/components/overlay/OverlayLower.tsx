import { FunctionComponent } from 'react';
import styles from './Overlay.module.css';

export const OverlayLower: FunctionComponent = () => {
  return (
    <section className={styles["overlay-lower-text"]}>
      <div className="left-text">
        <span className={styles["awards"] + " fancy-text"}>AWWWARDS</span>
        <span className={"site-text lato-font"}>Site of the Day</span>
      </div>
      <div className="right-text">
        <span className={styles["logo"] + " fancy-text"}>FWG</span>
        <span className="mobile-text lato-font">Mobile of the Day</span>
      </div>
    </section>
  );
};
