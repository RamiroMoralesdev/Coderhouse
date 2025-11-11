import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
  const { cart, clear, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <h2>Tu carrito está vacío</h2>
          <p>¡Agrega algunos productos para comenzar a comprar!</p>
          <Link to="/" className="continue-shopping">
            Continuar comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito de Compras</h2>
      
      <div className="cart-items">
        {cart.map(item => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            image={item.image}
          />
        ))}
      </div>
      
      <div className="cart-summary">
        <div className="cart-total">
          <h3>Total: ${getTotalPrice().toLocaleString()}</h3>
        </div>
        
        <div className="cart-actions">
          <button onClick={clear} className="clear-cart-btn">
            Vaciar carrito
          </button>
          <Link to="/checkout" className="checkout-btn">
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;