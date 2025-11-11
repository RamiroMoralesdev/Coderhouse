import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, name, category, price, description, image, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useCart();

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    
    const item = {
      id,
      name,
      price,
      image
    };
    
    addItem(item, quantity);
  };

  return (
    <div className="item-detail">
      <div className="item-detail-image">
        <img src={image} alt={name} />
      </div>
      
      <div className="item-detail-info">
        <h1 className="item-detail-name">{name}</h1>
        <p className="item-detail-category">Categoría: {category}</p>
        <p className="item-detail-price">${price.toLocaleString()}</p>
        <p className="item-detail-description">{description}</p>
        
        <div className="item-detail-actions">
          {quantityAdded > 0 ? (
            <div className="added-to-cart">
              <p>¡Producto agregado al carrito!</p>
              <div className="action-buttons">
                <Link to="/cart" className="go-to-cart-btn">
                  Ir al carrito
                </Link>
                <Link to="/" className="continue-shopping-btn">
                  Seguir comprando
                </Link>
              </div>
            </div>
          ) : (
            <ItemCount stock={stock} onAdd={handleOnAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;