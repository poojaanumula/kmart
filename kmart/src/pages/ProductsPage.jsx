// import React, { useContext } from 'react'
// import { ProductContext } from '../context/ProductContextProvider'
// import ProductsList from '../components/ProductsList'
// const ProductsPage = () => {
//    const { products } = useContext(ProductContext);
//   // console.log("SOOO", products)
//   return (
//     <div>
//       <h1>Products Page...</h1>
//       <ProductsList products={products} />
//     </div>
//   )
// }

// export default ProductsPage
// ProductsPage.js
import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContextProvider';
import ProductsList from '../components/ProductList/ProductsList';
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import Footer from '../components/Footer';
import CarouselComp from '../components/CarouselComp/CarouselComp';
const ProductsPage = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <h1 style={{fontFamily:'cursive', textAlign:'center', margin:'30px auto'}}>Shop Global Brands</h1>
     
      <ProductsList products={products} />
      <CarouselComp  />
      <Footer />
  
    </div>
  );
};

export default ProductsPage;
