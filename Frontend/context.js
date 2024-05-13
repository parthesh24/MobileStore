import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();


export const useCart = () => {
  return useContext(CartContext);
};


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://192.168.1.66:5000/api/cart`);
        if (response.status === 200) {
          setCartItems(response.data);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const addItemToCart = (item) => {
    axios.post(`http://192.168.1.66:5000/api/cart`, item)
      .then((response) => {
        if (response.status === 200) {
          setCartItems([...cartItems, item]);
        }
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error);
      });
  };
  
  const removeItemFromCart = (item) => {
    axios.post(`http://192.168.1.66:5000/api/cart/${item.asin}`)
      .then((response) => {
        if (response.status === 200) {
            const indexToRemove = cartItems.findIndex(product => product.asin === item.asin);
            if (indexToRemove !== -1) {
              const updatedCartItems = [...cartItems];
              updatedCartItems.splice(indexToRemove, 1);
              setCartItems(updatedCartItems);
            }
        }
      })
      .catch((error) => {
        console.error('Error removing item from cart:', error);
      });
  };
  
  const deleteItemFromCart = (item) => {
    axios.delete(`http://192.168.1.66:5000/api/cart/${item.asin}`)
      .then((response) => {
        if (response.status === 200) {
          const updatedCartItems = cartItems.filter(product => product.asin !== item.asin);
          setCartItems(updatedCartItems);
        }
      })
      .catch((error) => {
        console.error('Error deleting item from cart:', error);
      });
  };
  
  const clearCart = () => {
    axios.post(`http://192.168.1.66:5000/api/clear`)
      .then((response) => {
        if (response.status === 200) {
          setCartItems([]);
        }
      })
      .catch((error) => {
        console.error('Error clearing cart:', error);
      });
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, clearCart, setCartItems, deleteItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
