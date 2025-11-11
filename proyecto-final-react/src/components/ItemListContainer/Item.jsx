import { Link } from 'react-router-dom';

const Item = ({ id, name, price, image, stock }) => {
  return (
    <div className="item-card">
      <img src={image} alt={name} className="item-image" />
      <div className="item-info">
        <h3 className="item-name">{name}</h3>
        <p className="item-price">${price.toLocaleString()}</p>
        <p className="item-stock">
          {stock > 0 ? `Stock: ${stock}` : 'Sin stock'}
        </p>
        <Link to={`/item/${id}`} className="view-detail-btn">
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;