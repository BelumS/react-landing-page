import { FunctionComponent } from 'react';
import { ProductDetailsLeft } from './ProductDetailsLeft';
import { ProductDetailsRight } from './ProductDetailsRight';
import styles from './ProductDetails.module.css';

export const ProductDetails: FunctionComponent = () => {
  return (
    <section className={styles['product-details'] + " lato-font"}>
      <ProductDetailsLeft/>
      <ProductDetailsRight/>
    </section>
  );
};
