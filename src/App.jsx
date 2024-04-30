import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './Redux/CartSlice';
import productsData from './Product.json';
import CartPage from './CartPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    productsData.forEach(product => {
      dispatch(addItem(product));
    });
  }, [dispatch]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center'}}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Shopping Cart </h1>
      <CartPage />
    </div>
  );
};

export default App;