import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './Redux/CartSlice';
import CartItem from './CartItem';

const CartPage = () => {
  const items = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));
  const totalAmount = useSelector(state => state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0));
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };
  const handleProceedToPay = () => {
    console.log('Proceed to pay clicked');
  };
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto',width:'100vw' }}>
      {items.map(item => (
        <CartItem 
          key={item.id} 
          item={item} 
          onQuantityChange={handleQuantityChange} 
          onRemove={handleRemoveItem} 
        />
      ))}
      <div style={{ marginTop: '2rem',width:'100vw'}}>
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
        <button onClick={handleProceedToPay} style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '3px', padding: '0.5rem 1rem', cursor: 'pointer' }}>Proceed to Pay</button>
      </div>
    </div>
  );
};

export default CartPage;