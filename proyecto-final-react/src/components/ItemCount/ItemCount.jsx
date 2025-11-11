import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import './ItemCount.css';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0 && count <= stock) {
      onAdd(count);
    }
  };

  if (stock === 0) {
    return (
      <div className="item-count">
        <p className="no-stock">Sin stock disponible</p>
      </div>
    );
  }

  return (
    <div className="item-count">
      <div className="count-controls">
        <button 
          onClick={handleDecrement}
          disabled={count <= 1}
          className="count-btn"
        >
          <Minus size={16} />
        </button>
        <span className="count-display">{count}</span>
        <button 
          onClick={handleIncrement}
          disabled={count >= stock}
          className="count-btn"
        >
          <Plus size={16} />
        </button>
      </div>
      <button 
        onClick={handleAdd}
        className="add-to-cart-btn"
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
      <p className="stock-info">Stock disponible: {stock}</p>
    </div>
  );
};

export default ItemCount;