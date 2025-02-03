import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContextProvider'
import ProductsList from '../components/ProductsList'
const ProductsPage = () => {
   const { products } = useContext(ProductContext);
  // console.log("SOOO", products)
  return (
    <div>
      <h1>Products Page...</h1>
      <ProductsList products={products} />
    </div>
  )
}

export default ProductsPage
