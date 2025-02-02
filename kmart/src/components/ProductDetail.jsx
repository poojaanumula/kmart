import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContextProvider';

const ProductDetail = () => {
  const {addToCart} = useContext(ProductContext)
  const {findProductsById,products} = useContext(ProductContext)
    const {id}=useParams();
    if (products.length === 0) {
      return <p>Loading product details...</p>;
    }
  
    const selectedProduct = findProductsById(id);
    console.log("FINALL", selectedProduct);
  
    if (!selectedProduct) {
      return <p>Product not found!</p>;
    }
  return (
    <div>
      <h3>Product Detail...</h3>
      <div style={{ padding: '20px' }}>
      <h2>Product ID: {id}</h2>
       <h2>{selectedProduct.title}</h2> 
      <img src={selectedProduct.image} alt={selectedProduct.title} style={{ width: '300px', height: '300px', objectFit: 'contain' }} />
      <p>{selectedProduct.description}</p>
      <p>Price: ${selectedProduct.price}</p>
      <p>Category: {selectedProduct.category}</p>
      <p>rating: {selectedProduct.rating}</p>
      <Link to= "/cart" onClick={() =>
            addToCart(selectedProduct.id, selectedProduct.title, selectedProduct.price)
          }>Add to Cart</Link>
    </div> 
    </div>
  )
}

export default ProductDetail
