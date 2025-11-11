import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { getProducts, getProductsByCategory } from '../../services/productService';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        let productsData;
        
        if (categoryId) {
          productsData = await getProductsByCategory(categoryId);
        } else {
          productsData = await getProducts();
        }
        
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return (
      <div className="item-list-container">
        <div className="loading">
          <p>Cargando productos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="item-list-container">
        <div className="error">
          <p>Error al cargar los productos: {error}</p>
        </div>
      </div>
    );
  }

  const getCategoryTitle = () => {
    if (!categoryId) return greeting || 'Todos los productos';
    
    const categoryNames = {
      laptops: 'Laptops',
      smartphones: 'Smartphones',
      tablets: 'Tablets'
    };
    
    return categoryNames[categoryId] || 'Productos';
  };

  return (
    <div className="item-list-container">
      <h2 className="category-title">{getCategoryTitle()}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;