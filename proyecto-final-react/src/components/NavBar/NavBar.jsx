import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import './NavBar.css';

const CartWidget = () => {
  const { getTotalQuantity } = useCart();
  const totalQuantity = getTotalQuantity();

  return (
    <Link to="/cart" className="cart-widget">
      <ShoppingCart size={24} />
      {totalQuantity > 0 && (
        <span className="cart-count">{totalQuantity}</span>
      )}
    </Link>
  );
};

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <h1>TechStore</h1>
        </Link>
        
        <ul className="navbar-menu">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/category/laptops">Laptops</Link></li>
          <li><Link to="/category/smartphones">Smartphones</Link></li>
          <li><Link to="/category/tablets">Tablets</Link></li>
        </ul>
        
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;