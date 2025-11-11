import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductById } from '../../services/productService';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const productData = await getProductById(itemId);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (itemId) {
      fetchProduct();
    }
  }, [itemId]);

  if (loading) {
    return (
      <div className="item-detail-container">
        <div className="loading">
          <p>Cargando producto...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="item-detail-container">
        <div className="error">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="item-detail-container">
        <div className="not-found">
          <p>Producto no encontrado</p>
        </div>
      </div>
    );
  }

  return (
    <div className="item-detail-container">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;