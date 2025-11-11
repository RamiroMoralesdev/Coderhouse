import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { createOrder } from '../../services/productService';
import './Checkout.css';

const CheckoutForm = () => {
  const [buyer, setBuyer] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  const { cart, clear, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setBuyer({
      ...buyer,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (cart.length === 0) {
      alert('No hay productos en el carrito');
      return;
    }

    setLoading(true);
    
    const order = {
      buyer,
      items: cart.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity
      })),
      total: getTotalPrice(),
      date: new Date().toISOString()
    };

    try {
      const docId = await createOrder(order);
      setOrderId(docId);
      clear();
    } catch (error) {
      console.error('Error al crear la orden:', error);
      alert('Hubo un error al procesar tu orden. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="checkout-container">
        <div className="loading">
          <p>Procesando tu orden...</p>
        </div>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className="checkout-container">
        <div className="order-success">
          <h2>¡Orden creada exitosamente!</h2>
          <p>Tu número de orden es: <strong>{orderId}</strong></p>
          <p>Recibirás un email de confirmación en breve.</p>
          <button 
            onClick={() => navigate('/')}
            className="continue-shopping-btn"
          >
            Seguir comprando
          </button>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-container">
        <div className="empty-cart">
          <h2>No hay productos en tu carrito</h2>
          <button 
            onClick={() => navigate('/')}
            className="continue-shopping-btn"
          >
            Ir a la tienda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Finalizar Compra</h2>
      
      <div className="checkout-content">
        <div className="order-summary">
          <h3>Resumen de tu pedido</h3>
          <div className="summary-items">
            {cart.map(item => (
              <div key={item.id} className="summary-item">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="summary-total">
            <strong>Total: ${getTotalPrice().toLocaleString()}</strong>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          <h3>Datos de contacto</h3>
          
          <div className="form-group">
            <label htmlFor="name">Nombre completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={buyer.name}
              onChange={handleInputChange}
              required
              placeholder="Ingresa tu nombre completo"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Teléfono *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={buyer.phone}
              onChange={handleInputChange}
              required
              placeholder="Ingresa tu teléfono"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={buyer.email}
              onChange={handleInputChange}
              required
              placeholder="Ingresa tu email"
            />
          </div>

          <button type="submit" className="place-order-btn" disabled={loading}>
            {loading ? 'Procesando...' : 'Crear Orden'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;