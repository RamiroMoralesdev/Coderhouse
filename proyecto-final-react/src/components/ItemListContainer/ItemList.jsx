import Item from './Item';

const ItemList = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="empty-list">
        <p>No hay productos disponibles en esta categoría.</p>
      </div>
    );
  }

  return (
    <div className="item-list">
      {products.map(product => (
        <Item
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

export default ItemList;