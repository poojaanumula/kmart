import React, { createContext } from 'react'
import { useState, useEffect } from 'react'
import { getAllProducts } from '../services/project-services'
export const ProductContext = createContext(null)
const ProductContextProvider = ({children}) => {
    const [products, setProducts]=useState([])
    const [error,setError]=useState(null)
    const [cart, setCart] = useState([])
    const [total, setTotal]= useState()
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState('all');

    useEffect(()=>{
      getAllProducts().then((data)=>{
        setProducts(data)
        setFilteredProducts(data);
      }).catch((e)=>{
        setError(e)
      })
    },[])

    useEffect(() => {
      if (category === 'all') {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(products.filter(product => product.category === category));
      }
    }, [category, products]);

    const findProductsById = (id)=>{
      return products.find(product => product.id == id);
    }

    const addToCart = (productId, productName, productPrice)=>{
     const newProduct = {
      id: productId,
      name:productName,
      price:productPrice
     }

  
       // Calculate total price using reduce
  // const calculateTotal = () => {
  //   return cart.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0);
  // };
     setCart((prevData)=>[...prevData, newProduct]);
     setTotal((prevTotal) => prevTotal + productPrice);
    }
    // Function to remove an item completely from the cart based on its id
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  return <ProductContext.Provider value={{ products: filteredProducts,
      setCategory,findProductsById, addToCart, cart, total,removeFromCart}}>{children}</ProductContext.Provider>
}
export default ProductContextProvider
