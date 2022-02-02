import { FunctionComponent } from 'react';
import './App.css';
import { Overlay } from './components/overlay/Overlay';
import { ProductDetails } from './components/product-details/ProductDetails';
import { Footer } from './components/ui/Footer';

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <Overlay/>
      <ProductDetails/>
      <Footer />
    </div>
  );
};
