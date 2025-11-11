import { Trash2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const CartItem = ({ id, name, price, quantity, image }) => {
  const { removeItem } = useCart();

  const handleRemove = () => {
    removeItem(id);
  };

  return (
    <div className="cart-item">
      <img src={image} alt={name} className="cart-item-image" />
      
      <div className="cart-item-info">
        <h3 className="cart-item-name">{name}</h3>
        <p className="cart-item-price">${price.toLocaleString()}</p>
      </div>
      
      <div className="cart-item-quantity">
        <span>Cantidad: {quantity}</span>
      </div>
      
      <div className="cart-item-subtotal">
        <span>${(price * quantity).toLocaleString()}</span>
      </div>
      
      <button 
        onClick={handleRemove}
        className="cart-item-remove"
        title="Eliminar producto"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default CartItem;