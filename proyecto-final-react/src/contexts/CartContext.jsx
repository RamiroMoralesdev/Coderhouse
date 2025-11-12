import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Calcular cantidad total de items
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Calcular total del carrito
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Agregar item al carrito
  const addItem = (item, quantity) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Remover item del carrito
  const removeItem = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  // Limpiar carrito
  const clear = () => {
    setCart([]);
  };

  // Verificar si un item está en el carrito
  const isInCart = (itemId) => {
    return cart.some(item => item.id === itemId);
  };

  // Obtener cantidad de un item específico
  const getItemQuantity = (itemId) => {
    const item = cart.find(cartItem => cartItem.id === itemId);
    return item ? item.quantity : 0;
  };

  const value = {
    cart,
    addItem,
    removeItem,
    clear,
    isInCart,
    getTotalQuantity,
    getTotalPrice,
    getItemQuantity
  };

  return (
    <CartContext.Provider value={value}>  
      {children}
    </CartContext.Provider>
  );
};