import React from 'react'
import ProductCard from '../ProductCard'
import Classes from './ProductList.module.scss'
const ProductsList = ({products}) => {
  return <>
  <div className={Classes.mapp}>
  {products.map(each=><ProductCard key={each.id} products={each} />
)}
  </div>
  </>
}
export default ProductsList;
