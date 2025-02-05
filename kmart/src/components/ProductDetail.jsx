import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContextProvider';
import { BsDisplay } from 'react-icons/bs';
import { BiFontFamily } from 'react-icons/bi';

const ProductDetail = () => {

  const {findProductsById, products,addToCart} = useContext(ProductContext)
    
  const {id}=useParams();
    if (products.length === 0) {
      return <p>Loading product details...</p>;
    }
    const selectedProduct = findProductsById(id);
    if (!selectedProduct) {
      return <p>Product not found!</p>;
    }
  return (
    <div>
      <div style={{ padding: '20px', display:'flex' }}>

        <div style={{width:'50%', padding:'20px', marginLeft:'10%', display:'flex', flexDirection:'column', gap:'20px'}}>
          <img src={selectedProduct.image} 
          style={{ width: '300px', height: '300px', objectFit: 'contain', 
            }} />
          <p> <b><u>About the Product </u></b><i>{selectedProduct.description}</i></p>
        </div>

       <div style={{ padding:'20px', marginTop:'40px', display:'flex', flexDirection:'column', gap:'30px',fontFamily:'cursive'}}>
        <h2>{selectedProduct.title}</h2> 
        <p>Price: ${selectedProduct.price}</p>
        <p>Category: {selectedProduct.category}</p>
        <p>rating: {selectedProduct.rating}</p>
        {/* <Link 
              to= "/cart" onClick={() =>
              addToCart(selectedProduct.id, selectedProduct.title, selectedProduct.price)
            }>Add to Cart</Link> */}
            <Link 
               onClick={() =>
              addToCart(selectedProduct.id, selectedProduct.title, selectedProduct.price)} style={{border:'1px solid red', width:'200px', alignItems:'center', textAlign:'center', padding:'10px', background:'red', borderRadius:'10px', color:'white'}}>Add to Cart</Link>
       </div>
 
    </div> 
    </div>
  )
}

export default ProductDetail
