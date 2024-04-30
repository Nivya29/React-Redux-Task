import PropTypes from 'prop-types';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const { id, title, price, quantity, description, discountPercentage, rating, stock, brand, thumbnail } = item;

  const handleQuantityChange = (newQuantity) => {
    onQuantityChange(id, newQuantity);
  };

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '1rem', marginBottom: '2rem', margin: '0 5rem', width: 'calc(100vw - 10rem)', boxSizing:'border-box'  }}>
      <h3>{title}</h3>
      <img src={thumbnail} alt={title} style={{ maxWidth: '100px', maxHeight: '100px', marginBottom: '1rem' }} />
      <p>Description: {description}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Discount Percentage: {discountPercentage}%</p>
      <p>Rating: {rating}</p>
      <p>In Stock: {stock}</p>
      <p>Brand: {brand}</p>
      <div style={{ display: 'flex', justifyContent:'center',alignItems: 'center', marginBottom: '1rem' }}>
        <button onClick={() => handleQuantityChange(quantity - 1)} style={{ marginRight: '0.5rem' }}>-</button>
        <span style={{ margin: '0 0.5rem' }}>Quantity: {quantity}</span>
        <button onClick={() => handleQuantityChange(quantity + 1)} style={{ marginLeft: '0.5rem' }}>+</button>
      </div>
      <button onClick={handleRemove} style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '3px', padding: '0.5rem 1rem', cursor: 'pointer' }}>Remove</button>
      <p>Total: ${(price * quantity).toFixed(2)}</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    discountPercentage: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;