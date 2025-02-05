
import React, { createContext, useState, useEffect } from 'react';
import { getAllProducts } from '../services/project-services';

export const ProductContext = createContext(null);

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('all');

  //fetching data from backend
  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((e) => console.error(e));
  }, []);

  // product filtering by category
  useEffect(() => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  }, [category, products]);


  //find product by id
  const findProductsById = (id) => {
    return products.find((product) => product.id == id);
  };


  const addToCart = (productId, productName, productPrice) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === productId);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { id: productId, name: productName, price: productPrice, quantity: 1 }];
      }
    });
  };

  //remove from cart function
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Calculate the total price of items in the cart
  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

// handleQuantityChange function in Cart component
const handleQuantityChange = (itemId, newQuantity) => {
  if (newQuantity < 1) return; // Prevent quantity from going below 1
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === itemId
        ? { ...item, quantity: newQuantity } // Update quantity for this item
        : item
    )
  );
};
  return (
    <ProductContext.Provider value={{ 
      products: filteredProducts,
        setCategory,
        addToCart,
        cart,
        total,
        removeFromCart,
        handleQuantityChange,
        findProductsById
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
